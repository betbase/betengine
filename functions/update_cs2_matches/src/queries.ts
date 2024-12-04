// src/queries.ts
import { gql } from 'graphql-request';

export const GET_CS2_SERIES_STATE = gql`
  query GetCS2SeriesState($seriesId: ID!) {
    seriesState(id: $seriesId) {
      id
      valid
      updatedAt
      format
      started
      startedAt
      finished
      teams {
        id
        name
        won
        score
      }
    }
  }
`;
