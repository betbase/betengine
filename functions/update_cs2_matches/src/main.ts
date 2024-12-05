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

    return client.request<
      GetCs2SeriesStateQuery,
      GetCs2SeriesStateQueryVariables
    >(query, { seriesId });
  };

  // Fetch series from database that have not finished, but have start time scheduled in the past
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

  const seriesNotFinishedIds = seriesNotFinished.documents.map(
    (serie) => serie.$id
  );

  const updatedSeriesFromGrid = await Promise.all(
    seriesNotFinishedIds.map(async (serieId) => {
      try {
        const serieData = await fetchGraphQL(GET_CS2_SERIES_STATE, serieId);

        if (!serieData?.seriesState?.id) {
          log(`No data found for serie ID ${serieId}`);
          return null;
        }

        return serieData;
      } catch (e) {
        log(
          `Could not fetch series state for serie ID ${serieId}: ${e.message}`
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
        serie.seriesState.id,
        {
          startDate: serie.seriesState.startedAt,
          started: serie.seriesState.started,
          finished: serie.seriesState.finished,
          homeTeamName: serie.seriesState.teams[0].name,
          homeTeamScore: serie.seriesState.teams[0].score,
          homeTeamWon: serie.seriesState.teams[0].won,
          awayTeamName: serie.seriesState.teams[1].name,
          awayTeamScore: serie.seriesState.teams[1].score,
          awayTeamWon: serie.seriesState.teams[1].won,
          cancelled: !serie.seriesState.valid
        }
      );

      log(`Document for serie ID ${serie.seriesState.id} updated`);
    } catch (err) {
      error(`Could not update document: ` + err.message);
    }
  }

  return res.json({
    message: 'Successfully fetched and updated series states'
  });
};
