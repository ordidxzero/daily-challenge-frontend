import { gql } from '@apollo/client';

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount($username: String!, $password: String!) {
    createAccount(username: $username, password: $password) {
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
