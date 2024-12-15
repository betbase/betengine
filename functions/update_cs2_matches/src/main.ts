import { Client, Databases, Models, Query } from 'node-appwrite';
import { GraphQLClient } from 'graphql-request';
import {
  GetCs2SeriesStateQuery,
  GetCs2SeriesStateQueryVariables
} from './generated/graphql';
import { GET_CS2_SERIES_STATE } from './queries';

interface SerieMapModel extends Models.Document {
  mapName: string;
  mapId: string;
  finished: boolean;
  homeTeamScore: number;
  homeTeamWon: boolean;
  awayTeamScore: number;
  awayTeamWon: boolean;
  serie: {
    $id: string;
  };
}

export default async ({ req, res, log, error }) => {
  const appwriteClient = new Client()
    .setEndpoint(Bun.env['APPWRITE_FUNCTION_API_ENDPOINT'])
    .setProject(Bun.env['APPWRITE_FUNCTION_PROJECT_ID'])
    .setKey(req.headers['x-appwrite-key'] ?? '');
  const database = new Databases(appwriteClient);

  const fetchGraphQL = async (query: string, seriesId: string) => {
    const client = new GraphQLClient(Bun.env['GRID_LDF_API_URL'], {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': Bun.env['GRID_API_KEY']
      },
      errorPolicy: 'all'
    });

    return client.rawRequest<
      GetCs2SeriesStateQuery,
      GetCs2SeriesStateQueryVariables
    >(query, { seriesId });
  };

  // Fetch series from database that have not finished
  const seriesNotFinished = await database.listDocuments(
    Bun.env['DATABASE_ID'],
    'series',
    [
      Query.lessThanEqual('startTimeScheduled', new Date().toISOString()),
      Query.equal('finished', false),
      Query.equal('cancelled', false),
      Query.limit(500)
    ]
  );

  log(
    `Found ${seriesNotFinished.documents.length} series not finished but have start time scheduled in the past`
  );

  const seriesMaps: Models.DocumentList<SerieMapModel> =
    await database.listDocuments(Bun.env['DATABASE_ID'], 'seriemaps', [
      Query.equal(
        'serie',
        seriesNotFinished.documents.map((v) => v.$id)
      ),
      Query.limit(500)
    ]);

  log(
    `Found ${seriesMaps.documents.length} series maps for series not finished`
  );

  const updatedSeriesFromGrid = await Promise.all(
    seriesNotFinished.documents.map(async (serie) => {
      try {
        const response = await fetchGraphQL(GET_CS2_SERIES_STATE, serie.$id);

        // If the serie is deleted in GRID, mark it as cancelled
        if (
          response?.errors &&
          response?.errors[0]?.extensions?.errorType === 'PERMISSION_DENIED'
        ) {
          log(
            `The serie ID ${serie.$id} is deleted in GRID. Serie is now marked as cancelled.`
          );

          await database.updateDocument(
            Bun.env['DATABASE_ID'],
            'series',
            serie.$id,
            {
              cancelled: true
            }
          );

          return null;
        }

        // If the serie is deleted in GRID, mark it as cancelled
        if (response?.data?.seriesState === null) {
          log(
            `The serie ID ${serie.$id} is deleted in GRID. Serie is now marked as cancelled.`
          );

          await database.updateDocument(
            Bun.env['DATABASE_ID'],
            'series',
            serie.$id,
            {
              cancelled: true
            }
          );

          return null;
        }

        // If no data found for serie ID, log and return null
        if (!response?.data.seriesState?.id) {
          log(`No data found for serie ID ${serie.$id}`);
          return null;
        }

        return response.data.seriesState;
      } catch (e) {
        error(
          `Could not fetch series state for serie ID ${serie.$id}: ${e.message}`
        );
        return null;
      }
    })
  );

  // Update series in database
  for (const serie of updatedSeriesFromGrid.filter((v) => v !== null)) {
    try {
      await database.updateDocument(
        Bun.env['DATABASE_ID'],
        'series',
        serie.id,
        {
          startDate: serie.startedAt,
          started: serie.started,
          finished: serie.finished,
          homeTeamScore: serie.teams[0].score,
          homeTeamWon: serie.teams[0].won,
          homeTeam: serie.teams[0].id,
          awayTeamScore: serie.teams[1].score,
          awayTeamWon: serie.teams[1].won,
          awayTeam: serie.teams[1].id,
          rosterReady: !(
            serie.teams[0].name === 'TBD-1' || serie.teams[1].name === 'TBD-2'
          ),
          live: serie.started && !serie.finished && serie.valid,
          cancelled: !serie.valid
        }
      );

      log(`Document for serie ID ${serie.id} updated`);
    } catch (e) {
      error(
        `Could not update document for serie ID ${serie.id}: ${e.message} `
      );
    }

    // Create or update serie maps
    for (const map of serie.games) {
      const serieMap = seriesMaps.documents?.find((v) => v.$id === map.id);

      if (serieMap) {
        try {
          await database.updateDocument(
            Bun.env['DATABASE_ID'],
            'seriemaps',
            serieMap.$id,
            {
              finished: map.finished,
              homeTeamScore: map.teams[0].score,
              homeTeamWon:
                map.finished && map.teams[0].score > map.teams[1].score,
              awayTeamScore: map.teams[1].score,
              awayTeamWon:
                map.finished && map.teams[1].score > map.teams[0].score
            }
          );

          log(`Document for serie map ID ${serieMap.$id} updated`);
        } catch (e) {
          error(
            `Could not update document for serie map ID ${serieMap.$id}: ${e.message}`
          );
        }
      } else {
        try {
          await database.createDocument(
            Bun.env['DATABASE_ID'],
            'seriemaps',
            map.id,
            {
              mapName: map.map.name,
              mapId: map.map.id,
              finished: map.finished,
              homeTeamScore: map.teams[0].score,
              homeTeamWon:
                map.finished && map.teams[0].score > map.teams[1].score,
              awayTeamScore: map.teams[1].score,
              awayTeamWon:
                map.finished && map.teams[1].score > map.teams[0].score,
              serie: serie.id
            }
          );

          log(`Document for serie map ID ${map.id} created`);
        } catch (e) {
          error(
            `Could not create document for serie map ID ${map.id}: ${e.message}`
          );
        }
      }
    }
  }

  return res.json({
    message: 'Successfully fetched and updated series states'
  });
};
