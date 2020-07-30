import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type AuthInputState = {
  username: string;
  password: string;
};

export type TodoInputState = {
  startDate: string;
  endDate: string;
  title: string;
  amount: string;
  unit: string;
  startTime: string;
  endTime: string;
  weekDifference: string;
  dateDifference: string;
  amountChangeInterval: string;
  amountDifference: string;
};

export type InputState = {
  auth: AuthInputState;
  todo: TodoInputState;
};

export type SoftenInputState = {
  auth: AuthInputState;
  todo: {
    startDate: string;
    endDate: string;
    title: string;
    unit: string;
    startTime: string;
    endTime: string;
    dayNameToRepeat: number[];
    amount: number;
    weekDifference: number;
    dateDifference: number;
    amountChangeInterval: number;
    amountDifference: number;
  };
};

export type InputAction = ActionType<typeof actions>;

export type OnChangeTextParams = {
  field: keyof InputState;
  key: any;
  value: string;
};