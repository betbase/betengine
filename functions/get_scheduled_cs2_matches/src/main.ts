import { Client, Databases, Query } from 'node-appwrite';
import { GraphQLClient } from 'graphql-request';
import {
  GetScheduledCs2SeriesNext2WeeksQueryVariables,
  GetScheduledCs2SeriesNext2WeeksQuery,
  GetCs2TournamentQuery,
  GetCs2TournamentQueryVariables
} from './generated/graphql';
import {
  GET_SCHEDULED_CS2_SERIES_NEXT_2_WEEKS,
  GET_CS2_TOURNAMENT
} from './queries';

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

  const getSeries = async (
    query: string,
    variables: GetScheduledCs2SeriesNext2WeeksQueryVariables
  ) => {
    const client = new GraphQLClient(Bun.env['GRID_CD_API_URL'], {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': Bun.env['GRID_API_KEY']
      }
    });

    return client.rawRequest<
      GetScheduledCs2SeriesNext2WeeksQuery,
      GetScheduledCs2SeriesNext2WeeksQueryVariables
    >(query, variables);
  };

  const getTournament = async (query: string, tournamentId: string) => {
    const client = new GraphQLClient(Bun.env['GRID_CD_API_URL'], {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': Bun.env['GRID_API_KEY']
      }
    });

    return client.rawRequest<
      GetCs2TournamentQuery,
      GetCs2TournamentQueryVariables
    >(query, { tournamentId });
  };

  const seriesVariables: GetScheduledCs2SeriesNext2WeeksQueryVariables = {
    after: null,
    filter: {
      startTimeScheduled: {
        gte: formatDate(new Date()),
        lte: formatDate(new Date(), 14)
      },
      titleIds: { in: ['28'] }
    }
  };

  const initialFetch = await getSeries(
    GET_SCHEDULED_CS2_SERIES_NEXT_2_WEEKS,
    seriesVariables
  );
  let hasNextPage = initialFetch.data.allSeries.pageInfo.hasNextPage;
  let endCursor = initialFetch.data.allSeries.pageInfo.endCursor;
  const series = initialFetch.data.allSeries.edges.map((edge) => edge.node);

  while (hasNextPage) {
    const result = await getSeries(GET_SCHEDULED_CS2_SERIES_NEXT_2_WEEKS, {
      ...seriesVariables,
      after: endCursor
    });

    if (result?.data?.allSeries?.edges?.length > 0) {
      series.push(...result.data.allSeries.edges.map((edge) => edge.node));
    }

    hasNextPage = result.data.allSeries.pageInfo.hasNextPage;
    endCursor = result.data.allSeries.pageInfo.endCursor;
  }

  const tournamentIds = Array.from(
    new Set(series.map((serie) => serie.tournament.id))
  );

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

  for (const tournamentId of tournamentIds) {
    let tournamentDocument;
    try {
      tournamentDocument = await database.getDocument(
        Bun.env['DATABASE_ID'],
        'tournaments',
        tournamentId
      );
    } catch {
      log(`Document for tournament ID ${tournamentId} not found`);
    }

    try {
      const tournament = await getTournament(GET_CS2_TOURNAMENT, tournamentId);
      const tournamentObj = {
        name: tournament.data.tournament.name,
        nameShortened: tournament.data.tournament.nameShortened,
        logoUrl: tournament.data.tournament.logoUrl,
        startDate: tournament.data.tournament.startDate,
        endDate: tournament.data.tournament.endDate,
        prizePool: tournament.data.tournament.prizePool.amount
      };

      if (!tournamentDocument) {
        await database.createDocument(
          Bun.env['DATABASE_ID'],
          'tournaments',
          tournamentId,
          tournamentObj
        );

        log(`Document for tournament ID ${tournamentId} created`);
      } else {
        await database.updateDocument(
          Bun.env['DATABASE_ID'],
          'tournaments',
          tournamentId,
          tournamentObj
        );

        log(`Document for tournament ID ${tournamentId} updated`);
      }
    } catch (e: any) {
      error('Could not create or update document: ' + e.message);
    }
  }

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
        awayTeamScore: document?.awayTeamScore || 0,
        tournamentId: serie.tournament.id
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
