export type GetTodosInput = {
  dateString: string;
  position: number[];
};

export type MoldInput = {
  endDate: string;
  startTime: string;
  endTime: string;
  title: string;
  unit: string;
  isRepeat: boolean;
  method: 'weekdays' | 'dateDifference';
  dayNameToRepeat: number[];
  weekDifference: number;
  dateDifference: number;
  amountDifference: number;
  amountChangeInterval: number;
};

export type CreateTodoMoldInput = MoldInput & {
  startDate: string;
  currentAmount: number;
};

export type CreateTodoMoldData = {
  createTodoMold: {
    ok: boolean;
    error?: string;
    todoIds?: {
      id: string;
      dateString: string;
    }[];
    todoMoldId?: string;
  };
};

export type GetTodoMoldsInput = {
  dateString: string;
};

export type EditTodoMoldInput = MoldInput & {
  id: string;
  restartDate: string;
  newAmount: number;
};

export type EditTodoMoldData = {
  editTodoMold: {
    ok: boolean;
    todoIds?: {
      id: string;
      dateString: string;
    }[];
    oldTodoMoldId?: string;
    newTodoMold?: {
      id: string;
      amount: number;
    };
    error?: string;
  };
};

export type EditTodoInput = {
  id: string;
  title: string;
  dateString: string;
  amount: number;
  unit: string;
  startTime: string;
  endTime: string;
};

// Update, Delete input
export type UDInput = {
  id: string;
};

export type ToggleTodoInput = UDInput & { done: boolean };

export type ToggleDarkModeInput = { darkMode: boolean };

// Update, Delete, Toggle data
export type UDTData = {
  ok: boolean;
  error?: string;
};

export type EditTodoData = {
  editTodo: UDTData;
};

export type DeleteTodoData = {
  removeTodo: UDTData;
};

export type DeleteTodoMoldData = {
  deleteTodoMold: UDTData;
};

export type ToggleTodoData = {
  toggleTodo: UDTData;
};

export type ToggleDarkModeData = {
  toggleDarkMode: UDTData;
};

export type GetDarkModeData = {
  getDarkMode: UDTData & { darkMode?: boolean };
};
