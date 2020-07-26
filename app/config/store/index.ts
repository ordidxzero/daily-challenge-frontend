import { combineReducers } from 'redux';
import addTodo from './addTodo';
import login from './login';
import main from './main';
import form from './input';

const rootReducer = combineReducers({
  form,
  main,
  addTodo,
  login,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
