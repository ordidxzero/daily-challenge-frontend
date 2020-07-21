import { gql } from '@apollo/client';

export const GET_TODO_MOLDS = gql`
  query GetTodoMolds($dateString: String!) {
    getTodoMolds {
      ok
      data {
        title
        progressRate(dateString: $dateString)
        completionRate(dateString: $dateString)
      }
    }
  }
`;
