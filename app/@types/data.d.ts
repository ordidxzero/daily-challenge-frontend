import { RequestType as RequestTypeOriginal } from '../config/store/main';

export type TodoDataType = {
  id: string;
  dateString: string;
  title: string;
  amount: number;
  unit: string;
  startTime: string;
  endTime: string;
  done: boolean;
  todoMoldId: string;
};

export type AgendaDataType = {
  dateString: string;
  todos: TodoDataType[];
};

export type MoldDataType = {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  isRepeat: boolean;
  method: 'weekdays' | 'dateDifference';
  dayNameToRepeat: number[];
  weekDifference: number;
  dateDifference: number;
  amountDifference: number;
  amountChangeInterval: number;
  priority: number;
  isValid: boolean;
  progressRate: number;
  completionRate: number;
  currentContinuousAchievement: number;
  maxContinuousAchievement: number;
};

export type RequestType = RequestTypeOriginal;
