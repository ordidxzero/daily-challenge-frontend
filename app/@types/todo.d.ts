export type TodoType = {
  id: string;
  dateString: string;
  title: string;
  amount: number;
  unit: string;
  startTime: string;
  endTime: string;
  done: boolean;
};

export type AgendaDataType = {
  dateString: string;
  todos: TodoType[];
};

export type MoldDataType = {
  id: string;
  title: string;
  progressRate: number;
  completionRate: number;
};
