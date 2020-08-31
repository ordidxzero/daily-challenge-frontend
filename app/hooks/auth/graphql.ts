import { gql } from '@apollo/client';

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount(
    $username: String!
    $password: String!
    $startDayTime: String!
    $endDayTime: String!
  ) {
    createAccount(
      username: $username
      password: $password
      startDayTime: $startDayTime
      endDayTime: $endDayTime
    ) {
      ok
      error
    }
  }
`;

export const SIGN_IN = gql`
  query SignIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      ok
      error
      token
    }
  }
`;
