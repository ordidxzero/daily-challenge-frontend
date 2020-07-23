import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type TodoType = {
  title: string;
  amount: number;
  startTime: string;
  endTime: string;
  done: boolean;
};

export type AgendaDataType = {
  dateString: string;
  todos: TodoType[];
};

export type MainState = {
  selectedDay: string;
  isPanelActive: boolean;
  agenda: {
    data: AgendaDataType[];
    error: string | null;
  };
  loading: {
    around: boolean;
    before: boolean;
    after: boolean;
  };
};

export type MainAction = ActionType<typeof actions>;
