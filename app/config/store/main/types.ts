import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { AgendaDataType, MoldDataType, TodoType } from '../../../@types';
import { ApolloError } from '@apollo/client';

export type FakeTodoDataType = {
  dateString: string;
  todo: TodoType;
};

export type FakeTodoData = FakeTodoDataType[];

export type EditTodoDataType = TodoType;

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
  agenda: {
    data: AgendaDataType[];
    error: string | null;
  };
  moldData: {
    data: MoldDataType[];
    error: string | null;
  };
  loading: {
    moldData: boolean;
    around: boolean;
    before: boolean;
    after: boolean;
  };
};

export type RequestType = 'around' | 'before' | 'after' | 'moldData';

export type SuccessType = {
  type: RequestType;
  data: any;
};

export type FailureType = {
  type: RequestType;
  error: ApolloError;
};

export type MainAction = ActionType<typeof actions>;
