import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { AgendaDataType, MoldDataType, TodoDataType } from '../../../@types';
import { ApolloError } from '@apollo/client';

export type FakeTodoDataType = {
  dateString: string;
  todo: TodoDataType;
};

export type FakeData = {
  moldData?: MoldDataType;
  todoData: FakeTodoDataType[];
};

export type EditTodoDataType = Omit<TodoDataType, 'done' | 'todoMoldId'>;
export type EditTodoMoldDataType = {
  oldTodoMoldId: string;
  newTodoMoldId: string;
  restartDate: string;
};

export type DeleteTodoData = {
  dateString: string;
  id: string;
};

export type ToggledTodoData = DeleteTodoData & {
  done: boolean;
};

export type ErrorState = {
  around?: string;
  before?: string;
  after?: string;
  mold?: string;
  createMold?: string;
  deleteTodo?: string;
  deleteTodoMold?: string;
  editTodo?: string;
  editTodoMold?: string;
  toggleTodo?: string;
  toggleDarkMode?: string;
};

export type LoadingState = {
  around: boolean;
  before: boolean;
  after: boolean;
  mold: boolean;
};

export type MainState = {
  selectedDay: string;
  darkMode: boolean;
  detail: string | null;
  isPanelActive: boolean;
  agendas: AgendaDataType[];
  molds: MoldDataType[];
  error: ErrorState;
  loading: LoadingState;
};

export type RequestType = keyof ErrorState;

export type SuccessType = {
  type: RequestType;
  data: any;
};

export type FailureType = {
  type: RequestType;
  error: ApolloError;
};

export type MainAction = ActionType<typeof actions>;
