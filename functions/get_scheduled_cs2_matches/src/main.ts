import { Client, Databases, Query } from 'node-appwrite';
import { GraphQLClient } from 'graphql-request';
import {
  GetScheduledCs2SeriesNext2WeeksQueryVariables,
  GetScheduledCs2SeriesNext2WeeksQuery
} from './generated/graphql';
import { GET_SCHEDULED_CS2_SERIES_NEXT_2_WEEKS } from './queries';

export default async ({ req, res, log, error }) => {
  const appwriteClient = new Client()
    .setEndpoint(Bun.env['APPWRITE_FUNCTION_API_ENDPOINT'])
    .setProject(Bun.env['APPWRITE_FUNCTION_PROJECT_ID'])
    .setKey(req.headers['x-appwrite-key'] ?? '');
  const database = new Databases(appwriteClient);

  const formatDate = (date: Date, daysToAdd?: number) => {
    date.setDate(date.getDate() + (daysToAdd ?? 0));
    return date.toISOString().replace('.000Z', '+00:00');
  };

  const fetchGraphQL = async (
    query: string,
    variables: GetScheduledCs2SeriesNext2WeeksQueryVariables
  ) => {
    const client = new GraphQLClient(Bun.env['GRID_CD_API_URL'], {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': Bun.env['GRID_API_KEY']
      }
    });

    return client.request<
      GetScheduledCs2SeriesNext2WeeksQuery,
      GetScheduledCs2SeriesNext2WeeksQueryVariables
    >(query, variables);
  };

  const variables: GetScheduledCs2SeriesNext2WeeksQueryVariables = {
    after: null,
    filter: {
      startTimeScheduled: {
        gte: formatDate(new Date()),
        lte: formatDate(new Date(), 14)
      },
      titleIds: { in: ['28'] }
    }
  };

  const initialFetch = await fetchGraphQL(
    GET_SCHEDULED_CS2_SERIES_NEXT_2_WEEKS,
    variables
  );
  let hasNextPage = initialFetch.allSeries.pageInfo.hasNextPage;
  let endCursor = initialFetch.allSeries.pageInfo.endCursor;
  const series = initialFetch.allSeries.edges.map((edge) => edge.node);

  while (hasNextPage) {
    const result = await fetchGraphQL(GET_SCHEDULED_CS2_SERIES_NEXT_2_WEEKS, {
      ...variables,
      after: endCursor
    });

    if (result?.allSeries?.edges?.length > 0) {
      series.push(...result.allSeries.edges.map((edge) => edge.node));
    }

    hasNextPage = result.allSeries.pageInfo.hasNextPage;
    endCursor = result.allSeries.pageInfo.endCursor;
  }

  const seriesDocuments = await database.listDocuments(
    Bun.env['DATABASE_ID'],
    'series',
    [
      Query.equal(
        '$id',
        series.map((serie) => serie.id)
      ),
      Query.limit(500)
    ]
  );

  for (const serie of series) {
    const document = seriesDocuments.documents.find(
      (v) => v.$id === serie.id
    ) as any;

    try {
      const serieDocument = {
        gameId: '28',
        startTimeScheduled: serie.startTimeScheduled,
        format: serie.format.name,
        homeTeamId: serie.teams[0].baseInfo.id,
        homeTeamName: serie.teams[0].baseInfo.name,
        homeTeamScore: document?.homeTeamScore || 0,
        awayTeamId: serie.teams[1].baseInfo.id,
        awayTeamName: serie.teams[1].baseInfo.name,
        awayTeamScore: document?.awayTeamScore || 0
      };

      if (!document) {
        await database.createDocument(
          Bun.env['DATABASE_ID'],
          'series',
          serie.id,
          serieDocument
        );

        log(`Document for serie ID ${serie.id} created`);
      } else {
        await database.updateDocument(
          Bun.env['DATABASE_ID'],
          'series',
          serie.id,
          serieDocument
        );

        log(`Document for serie ID ${serie.id} updated`);
      }
    } catch (err) {
      error('Could not create or update document: ' + err.message);
    }
  }

  return res.json({
    message:
      'Successfully fetched and updated series next 2 weeks of CS2 series'
  });
};
