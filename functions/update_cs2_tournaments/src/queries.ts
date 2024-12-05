// src/queries.ts
import { gql } from 'graphql-request';

export const GET_CS2_TOURNAMENT = gql`
  query GetCS2Tournament($tournamentId: ID!) {
    tournament(id: $tournamentId) {
      id
      endDate
      startDate
      name
      nameShortened
      logoUrl
      prizePool {
        amount
      }
    }
  }
`;
