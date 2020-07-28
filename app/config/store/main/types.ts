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

export type MoldDataType = {
  title: string;
  progressRate: number;
  completionRate: number;
};

export type MainState = {
  selectedDay: string;
  isPanelActive: boolean;
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
