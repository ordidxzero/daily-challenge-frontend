import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { AgendaDataType, MoldDataType, TodoDataType } from '../../../@types';
import { ApolloError } from '@apollo/client';

export type FakeTodoDataType = {
  dateString: string;
  todo: TodoDataType;
};

export type FakeData = {
  moldData: MoldDataType;
  todoData: FakeTodoDataType[];
};

export type EditTodoDataType = Omit<TodoDataType, 'done' | 'todoMoldId'>;
export type EditTodoMoldDataType = {
  oldTodoMoldId: string;
  newTodoMoldId: string;
  restartDate: string;
};

export type ToggledTodoData = {
  dateString: string;
  id: string;
};

export type RequestState = {
  around: boolean | string | null;
  before: boolean | string | null;
  after: boolean | string | null;
  mold: boolean | string | null;
  createMold: boolean | string | null;
  deleteTodo: boolean | string | null;
  deleteTodoMold: boolean | string | null;
  editTodo: boolean | string | null;
  editTodoMold: boolean | string | null;
  toggleTodo: boolean | string | null;
};

export type MainState = {
  selectedDay: string;
  detail: string | null;
  isPanelActive: boolean;
  agendas: AgendaDataType[];
  molds: MoldDataType[];
  error: RequestState;
  loading: RequestState;
};

export type RequestType = keyof RequestState;

export type SuccessType = {
  type: RequestType;
  data: any;
};

export type FailureType = {
  type: RequestType;
  error: ApolloError;
};

export type MainAction = ActionType<typeof actions>;
