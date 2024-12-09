import { Client, Databases, Query } from 'node-appwrite';
import { GraphQLClient } from 'graphql-request';
import {
  GetCs2SeriesStateQuery,
  GetCs2SeriesStateQueryVariables
} from './generated/graphql';
import { GET_CS2_SERIES_STATE } from './queries';

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
          homeTeamName: serie.teams[0].name,
          homeTeamScore: serie.teams[0].score,
          homeTeamWon: serie.teams[0].won,
          awayTeamName: serie.teams[1].name,
          awayTeamScore: serie.teams[1].score,
          awayTeamWon: serie.teams[1].won,
          live: serie.started && !serie.finished && serie.valid,
          cancelled: !serie.valid
        }
      );

      log(`Document for serie ID ${serie.id} updated`);
    } catch (err) {
      error(`Could not update document: ` + err.message);
    }
  }

  return res.json({
    message: 'Successfully fetched and updated series states'
  });
};
