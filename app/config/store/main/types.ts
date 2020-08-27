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
  done: boolean;
};

export type RequestState = {
  around?: boolean | string;
  before?: boolean | string;
  after?: boolean | string;
  mold?: boolean | string;
  createMold?: boolean | string;
  deleteTodo?: boolean | string;
  deleteTodoMold?: boolean | string;
  editTodo?: boolean | string;
  editTodoMold?: boolean | string;
  toggleTodo?: boolean | string;
};

export type MainState = {
  selectedDay: string;
  darkMode: boolean;
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
