import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { AgendaDataType, MoldDataType, TodoType } from '../../../@types';
import { ApolloError } from '@apollo/client';

export type FakeTodoDataType = {
  dateString: string;
  todo: TodoType;
};

export type FakeData = {
  moldData: MoldDataType;
  todoData: FakeTodoDataType[];
};

export type EditTodoDataType = Omit<TodoType, 'done'>;
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
  key: 'create' | 'mold' | 'todo';
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

export type RequestType = 'around' | 'before' | 'after' | 'mold';

export type SuccessType = {
  type: RequestType;
  data: any;
};

export type FailureType = {
  type: RequestType;
  error: ApolloError;
};

export type MainAction = ActionType<typeof actions>;
