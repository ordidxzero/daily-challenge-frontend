import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type AuthInputState = {
  username: string;
  password: string;
};

export type TodoInputState = {
  startDate?: string;
  endDate?: string; // TODO: 나중에 필수로 바꿀 것
  title: string;
  amount: string;
  unit?: string;
  startTime?: string;
  endTime?: string;
  weekDifference: string;
  dateDifference: string;
  amountChangeInterval: string;
  amountDifference: string;
};

export type InputState = {
  auth: AuthInputState;
  todo: TodoInputState;
};

export type InputAction = ActionType<typeof actions>;

export type OnChangeTextParams = {
  field: keyof InputState;
  key: any;
  value: string;
};
