import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query GetTodos($dateString: String!, $position: [Int!]!) {
    getTodos(dateString: $dateString, position: $position) {
      ok
      error
      data {
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
        startDate
        endDate
        startTime
        endTime
        dayNameToRepeat
        weekDifference
        dateDifference
        amountDifference
        amountChangeInterval
        priority
        isValid
        progressRate(dateString: $dateString)
        completionRate(dateString: $dateString)
      }
    }
  }
`;

export const EDIT_TODO = gql`
  mutation EditTodo(
    $id: String!
    $title: String
    $dateString: String
    $amount: Int
    $unit: String
    $startTime: String
    $endTime: String
  ) {
    editTodo(
      id: $id
      title: $title
      dateString: $dateString
      amount: $amount
      unit: $unit
      startTime: $startTime
      endTime: $endTime
    ) {
      ok
      error
    }
  }
`;

export const DELETE_TODO = gql`
  mutation RemoveTodo($id: String!) {
    removeTodo(id: $id) {
      ok
      error
    }
  }
`;
