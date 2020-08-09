import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { AgendaDataType, MoldDataType, TodoType } from '../../../@types';

export type FakeTodoDataType = {
  dateString: string;
  todo: TodoType;
};

export type EditTodoDataType = TodoType;

export type ToggledTodoData = {
  dateString: string;
  id: string;
};

export type PanelData = {
  key: 'create' | 'mold' | 'todo';
  isActive: boolean;
};

export type FakeTodoData = FakeTodoDataType[];

export type MainState = {
  selectedDay: string;
  selectedTodo?: string;
  statusBarStyle: 'dark-content' | 'light-content';
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

export type MainAction = ActionType<typeof actions>;
