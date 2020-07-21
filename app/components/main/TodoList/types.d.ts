import { ViewToken } from 'react-native';

// ----------------- ToDoList.tsx type -----------------

export type ViewableItemsType = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

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

// -----------------------------------------------------
