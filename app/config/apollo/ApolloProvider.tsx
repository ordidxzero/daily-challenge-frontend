import React from 'react';
import {
  ApolloClient,
  ApolloProvider as Provider,
  InMemoryCache,
} from '@apollo/client';
import useReduxState from '../../hooks/useReduxState';

const ApolloProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    login: { token },
  } = useReduxState();

  const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache(),
    headers: {
      'x-get': token || '',
    },
  });
  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;
