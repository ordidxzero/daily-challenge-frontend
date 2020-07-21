import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query GetTodos($dateString: String!, $position: [Int!]!) {
    getTodos(dateString: $dateString, position: $position) {
      ok
      error
      agenda {
        dateString
        todos {
          title
          amount
          startTime
          endTime
          unit
          done
        }
      }
    }
  }
`;
