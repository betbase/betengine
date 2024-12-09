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

  const tournamentIds = new Set<string>();
  const tournaments = series
    .map((serie) => serie.tournament)
    .filter((tournament) => !tournamentIds.has(tournament.id) && tournamentIds.add(tournament.id));

  const teamsIds = new Set<string>();
  const teams = series
    .map((serie) => serie.teams)
    .flat()
    .map((team) => team.baseInfo)
    .filter((team) => !teamsIds.has(team.id) && teamsIds.add(team.id));

  const tournamentsDocuments = await database.listDocuments(
    Bun.env['DATABASE_ID'],
    'tournaments',
    [Query.equal('$id', Array.from(tournamentIds)), Query.limit(500)]
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

  const teamsDocuments = await database.listDocuments(
    Bun.env['DATABASE_ID'],
    'teams',
    [Query.equal('$id', Array.from(teamsIds)), Query.limit(500)]
  );

  for (const team of teams) {
    const teamDocument = teamsDocuments.documents.find(
      (document) => document.$id === team.id
    ) as any;

    const teamObj = {
      name: team.name,
      logoUrl: team.logoUrl,
      colorPrimary: team.colorPrimary,
      colorSecondary: team.colorSecondary
    };

    if (!teamDocument) {
      try {
        await database.createDocument(
          Bun.env['DATABASE_ID'],
          'teams',
          team.id,
          teamObj
        );

        log(`Document for team ID ${team.id} created`);
      } catch (e) {
        error(`Could not create document for team ID ${team.id}: ${e.message}`);
      }
    } else {
      try {
        await database.updateDocument(
          Bun.env['DATABASE_ID'],
          'teams',
          team.id,
          teamObj
        );

        log(`Document for team ID ${team.id} updated`);
      } catch (e) {
        error(`Could not update document for team ID ${team.id}: ${e.message}`);
      }
    }
  }

  for (const tournament of tournaments) {
    const tournamentDocument = tournamentsDocuments.documents.find(
      (document) => document.$id === tournament.id
    );

    const tournamentObj = {
      name: tournament.name,
      nameShortened: tournament.nameShortened,
      logoUrl: tournament.logoUrl,
      startDate: tournament.startDate,
      endDate: tournament.endDate,
      prizePool: tournament.prizePool.amount
    };

    if (!tournamentDocument) {
      try {
        await database.createDocument(
          Bun.env['DATABASE_ID'],
          'tournaments',
          tournament.id,
          tournamentObj
        );

        log(`Document for tournament ID ${tournament.id} created`);
      } catch (e) {
        error(
          `Could not create document for tournament ID ${tournament.id}: ${e.message}`
        );
      }
    } else {
      try {
        await database.updateDocument(
          Bun.env['DATABASE_ID'],
          'tournaments',
          tournament.id,
          tournamentObj
        );

        log(`Document for tournament ID ${tournament.id} updated`);
      } catch (e) {
        error(
          `Could not update document for tournament ID ${tournament.id}: ${e.message}`
        );
      }
    }
  }

  for (const serie of series) {
    const document = seriesDocuments.documents.find(
      (v) => v.$id === serie.id
    ) as any;

    try {
      const serieDocument = {
        game: '28',
        startTimeScheduled: serie.startTimeScheduled,
        format: serie.format.name,
        homeTeam: serie.teams[0].baseInfo.id,
        homeTeamScore: document?.homeTeamScore || 0,
        awayTeam: serie.teams[1].baseInfo.id,
        awayTeamScore: document?.awayTeamScore || 0,
        rosterReady: !(serie.teams[0].baseInfo.name === 'TBD-1' || serie.teams[1].baseInfo.name === 'TBD-2'),
        tournament: serie.tournament.id
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
    } catch (e) {
      error(`Could not create or update serie ID ${serie.id}: ${e.message}`);
    }
  }

  return res.json({
    message:
      'Successfully fetched and updated series next 2 weeks of CS2 series'
  });
};
