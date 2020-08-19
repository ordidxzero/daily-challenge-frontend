import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import {
  AgendaDataType,
  MoldDataType,
  TodoDataType,
  PanelType,
  RequestType as RequestTypeOriginal,
} from '../../../@types';
import { ApolloError } from '@apollo/client';

export type FakeTodoDataType = {
  dateString: string;
  todo: TodoDataType;
};

export type FakeData = {
  moldData: MoldDataType;
  todoData: FakeTodoDataType[];
};

export type EditTodoDataType = Omit<TodoDataType, 'done'>;
export type EditTodoMoldDataType = {
  id: string;
  data: {
    title: string;
    endDate: string;
    startTime: string;
    endTime: string;
    isRepeat: boolean;
    method: 'weekdays' | 'dateDifference';
    dayNameToRepeat: number[];
    weekDifference: number;
    dateDifference: number;
    amountChangeInterval: number;
    amountDifference: number;
  };
  todoData: FakeTodoDataType[];
};

export type ToggledTodoData = {
  dateString: string;
  id: string;
};

export type PanelData = {
  key: PanelType;
  isActive: boolean;
};

export type MainState = {
  selectedDay: string;
  detail: string | null;
  panel: {
    create: boolean;
    todo: boolean;
    mold: boolean;
  };
  agendas: AgendaDataType[];
  molds: MoldDataType[];
  error: {
    around: string | null;
    before: string | null;
    after: string | null;
    mold: string | null;
  };
  loading: {
    mold: boolean;
    around: boolean;
    before: boolean;
    after: boolean;
  };
};

export type RequestType = RequestTypeOriginal;

export type SuccessType = {
  type: RequestTypeOriginal;
  data: any;
};

export type FailureType = {
  type: RequestTypeOriginal;
  error: ApolloError;
};

export type MainAction = ActionType<typeof actions>;
