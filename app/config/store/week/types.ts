import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type DayOfWeek = {
  day: string;
  selected: boolean;
};

export type AddTodoState = DayOfWeek[];

export type AddTodoAction = ActionType<typeof actions>;
