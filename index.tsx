import React from 'react';
import { registerRootComponent } from 'expo';
import App from './app/App';
import ApolloProvider from './app/config/apollo/ApolloProvider';
import ReduxProvider from './app/config/store/ReduxProvider';

function AppWrapper() {
  return (
    <ReduxProvider>
      <ApolloProvider>
        <App />
      </ApolloProvider>
    </ReduxProvider>
  );
}

registerRootComponent(AppWrapper);
