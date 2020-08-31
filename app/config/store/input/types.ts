import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type AuthInputState = {
  username: string;
  password: string;
  startDayTime: string;
  endDayTime: string;
};

export type TodoInputState = {
  startDate: string;
  endDate: string;
  title: string;
  amount: string;
  unit: string;
  isRepeat: boolean;
  method: 'weekdays' | 'dateDifference';
  startTime: string;
  endTime: string;
  weekDifference: string;
  dateDifference: string;
  amountChangeInterval: string;
  amountDifference: string;
};

export type SoftenTodoInputState = {
  startDate: string;
  endDate: string;
  title: string;
  unit: string;
  startTime: string;
  endTime: string;
  amount: number;
  isRepeat: boolean;
  method: 'weekdays' | 'dateDifference';
  weekDifference: number;
  dateDifference: number;
  amountChangeInterval: number;
  amountDifference: number;
  dayNameToRepeat: number[];
};

export type InputState = {
  auth: AuthInputState;
  todo: TodoInputState;
};

export type SoftenInputState = {
  auth: AuthInputState;
  todo: SoftenTodoInputState;
};

export type InputAction = ActionType<typeof actions>;

export type OnChangeTextParams = {
  field: keyof InputState;
  key: any;
  value: string | number | boolean;
};
