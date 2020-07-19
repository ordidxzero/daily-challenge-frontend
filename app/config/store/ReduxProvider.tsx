import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '.';

const store = createStore(rootReducer);

function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
