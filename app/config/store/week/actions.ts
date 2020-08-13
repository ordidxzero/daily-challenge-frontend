import { createAction } from 'typesafe-actions';

export const SELECT_DAY_OF_WEEK = 'addTodo/SELECT_DAY_OF_WEEK';
export const RESET_STATE = 'addTodo/RESET_STATE';

export const selectWeekday = createAction(SELECT_DAY_OF_WEEK)<
  string | number[]
>();
export const resetSelectedWeekdays = createAction(RESET_STATE)();
