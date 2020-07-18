import React from 'react';
import { registerRootComponent } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app/App';
import rootReducer from './app/config/store';
import ApolloProvider from './app/config/apollo/ApolloProvider';

const store = createStore(rootReducer);

function AppWrapper() {
  return (
    <Provider store={store}>
      <ApolloProvider>
        <App />
      </ApolloProvider>
    </Provider>
  );
}

registerRootComponent(AppWrapper);
