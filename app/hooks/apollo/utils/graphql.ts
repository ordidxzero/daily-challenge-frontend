import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query GetTodos($dateString: String!, $position: [Int!]!) {
    getTodos(dateString: $dateString, position: $position) {
      ok
      error
      agenda {
        dateString
        todos {
          id
          dateString
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

export const CREATE_TODO_MOLD = gql`
  mutation CreateTodoMold(
    $startDate: String!
    $endDate: String!
    $startTime: String!
    $endTime: String!
    $title: String!
    $currentAmount: Int!
    $unit: String!
    $dayNameToRepeat: [Int!]!
    $weekDifference: Int!
    $dateDifference: Int!
    $amountDifference: Int!
    $amountChangeInterval: Int!
  ) {
    createTodoMold(
      startDate: $startDate
      endDate: $endDate
      startTime: $startTime
      endTime: $endTime
      title: $title
      currentAmount: $currentAmount
      unit: $unit
      dayNameToRepeat: $dayNameToRepeat
      weekDifference: $weekDifference
      dateDifference: $dateDifference
      amountDifference: $amountDifference
      amountChangeInterval: $amountChangeInterval
    ) {
      ok
      error
    }
  }
`;

export const GET_TODO_MOLDS = gql`
  query GetTodoMolds($dateString: String!) {
    getTodoMolds {
      ok
      data {
        id
        title
        progressRate(dateString: $dateString)
        completionRate(dateString: $dateString)
      }
    }
  }
`;
