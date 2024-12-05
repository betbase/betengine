import { Client, Databases, Query } from 'node-appwrite';
import { GraphQLClient } from 'graphql-request';
import {
  GetCs2TournamentQuery,
  GetCs2TournamentQueryVariables
} from './generated/graphql';
import { GET_CS2_TOURNAMENT } from './queries';

export default async ({ req, res, log, error }) => {
  const appwriteClient = new Client()
    .setEndpoint(Bun.env['APPWRITE_FUNCTION_API_ENDPOINT'])
    .setProject(Bun.env['APPWRITE_FUNCTION_PROJECT_ID'])
    .setKey(req.headers['x-appwrite-key'] ?? '');
  const database = new Databases(appwriteClient);

  const fetchGraphQL = async (query: string, tournamentId: string) => {
    const client = new GraphQLClient(Bun.env['GRID_CD_API_URL'], {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': Bun.env['GRID_API_KEY']
      },
      errorPolicy: 'all'
    });

    return client.rawRequest<
      GetCs2TournamentQuery,
      GetCs2TournamentQueryVariables
    >(query, { tournamentId });
  };

  const tournaments = await database.listDocuments(
    Bun.env['APPWRITE_FUNCTION_DATABASE_ID'],
    'tournaments',
    [Query.greaterThanEqual('endDate', new Date().toISOString())]
  );

  for (const tournament of tournaments.documents) {
    const tournamentId = tournament.$id;
    const { data, errors } = await fetchGraphQL(
      GET_CS2_TOURNAMENT,
      tournamentId
    );

    if (errors[0]) {
      error(`Failed to fetch tournament ${tournamentId}: ${errors[0].message}`);
      continue;
    }

    if (!data) {
      error(`No data found for tournament ID ${tournamentId}`);
      continue;
    }

    try {
      await database.updateDocument(
        Bun.env['APPWRITE_FUNCTION_DATABASE_ID'],
        'tournaments',
        tournament.$id,
        {
          name: data.tournament.name,
          nameShortened: data.tournament.nameShortened,
          logoUrl: data.tournament.logoUrl,
          startDate: data.tournament.startDate,
          endDate: data.tournament.endDate,
          prizePool: data.tournament.prizePool.amount
        }
      );
    } catch (e: any) {
      error(`Failed to update tournament ${tournamentId}: ${e.message}`);
    }
  }

  return res.json({
    message: 'Successfully fetched and updated tournaments'
  });
};
