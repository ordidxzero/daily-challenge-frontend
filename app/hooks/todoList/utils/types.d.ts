// ----------------- useTodoData.ts type -----------------

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

// -------------------------------------------------------
