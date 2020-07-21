import { combineReducers } from 'redux';
import addTodo from './addTodo';
import login from './login';
import main from './main';

const rootReducer = combineReducers({
  main,
  addTodo,
  login,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
