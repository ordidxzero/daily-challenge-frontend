import { combineReducers } from 'redux';
import week from './week';
import login from './login';
import main from './main';
import form from './input';

const rootReducer = combineReducers({
  form,
  main,
  week,
  login,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
