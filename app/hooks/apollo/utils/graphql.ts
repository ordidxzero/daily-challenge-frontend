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
          todoMoldId
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
    $isRepeat: Boolean!
    $method: String!
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
      isRepeat: $isRepeat
      method: $method
      dayNameToRepeat: $dayNameToRepeat
      weekDifference: $weekDifference
      dateDifference: $dateDifference
      amountDifference: $amountDifference
      amountChangeInterval: $amountChangeInterval
    ) {
      ok
      todoIds {
        id
        dateString
      }
      todoMoldId
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
        unit
        isRepeat
        method
        initialAmount
        dayNameToRepeat
        weekDifference
        dateDifference
        amountDifference
        amountChangeInterval
        priority
        isValid
        completionRate(dateString: $dateString)
        progressRate(dateString: $dateString)
        currentContinuousAchievement(dateString: $dateString)
        maxContinuousAchievement(dateString: $dateString)
      }
    }
  }
`;

export const EDIT_TODO_MOLD = gql`
  mutation EditTodoMold(
    $id: String!
    $restartDate: String!
    $endDate: String!
    $startTime: String!
    $endTime: String!
    $title: String!
    $newAmount: Int!
    $unit: String!
    $isRepeat: Boolean!
    $method: String!
    $dayNameToRepeat: [Int!]!
    $weekDifference: Int!
    $dateDifference: Int!
    $amountDifference: Int!
    $amountChangeInterval: Int!
  ) {
    editTodoMold(
      id: $id
      restartDate: $restartDate
      endDate: $endDate
      startTime: $startTime
      endTime: $endTime
      title: $title
      newAmount: $newAmount
      unit: $unit
      isRepeat: $isRepeat
      method: $method
      dayNameToRepeat: $dayNameToRepeat
      weekDifference: $weekDifference
      dateDifference: $dateDifference
      amountDifference: $amountDifference
      amountChangeInterval: $amountChangeInterval
    ) {
      ok
      todoIds {
        id
        dateString
      }
      oldTodoMoldId
      newTodoMold {
        id
        amount
      }
      error
    }
  }
`;

export const EDIT_TODO = gql`
  mutation EditTodo(
    $id: String!
    $title: String!
    $dateString: String!
    $amount: Int!
    $unit: String!
    $startTime: String!
    $endTime: String!
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
  mutation DeleteTodo($id: String!) {
    removeTodo(id: $id) {
      ok
      error
    }
  }
`;

export const DELETE_TODO_MOLD = gql`
  mutation DeleteTodoMold($id: String!) {
    deleteTodoMold(id: $id) {
      ok
      error
    }
  }
`;

export const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: String!, $done: Boolean!) {
    toggleTodo(id: $id, done: $done) {
      ok
      error
    }
  }
`;

export const TOGGLE_DARK_MODE = gql`
  mutation ToggleDarkMode($darkMode: Boolean!) {
    toggleDarkMode(darkMode: $darkMode) {
      ok
      error
    }
  }
`;

export const GET_DARK_MODE = gql`
  query GetDarkMode {
    getDarkMode {
      ok
      darkMode
      error
    }
  }
`;
