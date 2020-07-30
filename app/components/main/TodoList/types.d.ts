import { ViewToken } from 'react-native';
import { TodoType } from '../../../@types';

// ----------------- ToDoList.tsx type -----------------

export type ViewableItemsType = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

export type AgendaDataType = {
  dateString: string;
  todos: TodoType[];
};

// -----------------------------------------------------
