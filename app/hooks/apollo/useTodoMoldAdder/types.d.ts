import { SoftenTodoInputState } from '../../../config/store/input';

export type GetDateStringArrayParams = {
  start: string;
  endDay?: string;
  arr?: string[];
};

export type CheckOverRangeParams = {
  end: string;
  target: string[];
};

export type GenerateDataParams = {
  data: SoftenTodoInputState;
  todoMoldId?: string;
  todoIds: { id: string; dateString: string }[];
};

export type FakeDataParams = {
  todoMoldId?: string;
  todoIds: { id: string; dateString: string }[];
};

export type GenerateMoldDataParams = {
  data: SoftenTodoInputState;
  todoMoldId: string;
};
