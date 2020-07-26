import { gql } from '@apollo/client';

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
