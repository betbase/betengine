// src/queries.ts
import { gql } from 'graphql-request';

export const GET_SCHEDULED_CS2_SERIES_NEXT_2_WEEKS = gql`
  query GetScheduledCS2SeriesNext2Weeks($filter: SeriesFilter, $after: Cursor) {
    allSeries(filter: $filter, orderBy: StartTimeScheduled, after: $after) {
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          title {
            name
            nameShortened
          }
          tournament {
            name
            nameShortened
            id
            logoUrl
            endDate
            startDate
          }
          startTimeScheduled
          format {
            name
            nameShortened
          }
          teams {
            baseInfo {
              name
              logoUrl
              id
            }
            scoreAdvantage
          }
        }
      }
    }
  }
`;

export const GET_CS2_TOURNAMENT = gql`
  query GetCS2Tournament($tournamentId: ID!) {
    tournament(id: $tournamentId) {
      endDate
      id
      logoUrl
      name
      nameShortened
      prizePool {
        amount
      }
      startDate
    }
  }
`;
