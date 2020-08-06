import { ViewToken } from 'react-native';
import { TodoType } from '../../../@types';

// ----------------- index.tsx type -----------------

export type ViewableItemsType = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

export type AgendaDataType = {
  dateString: string;
  todos: TodoType[];
};
// --------------------------------------------------

// ----------------- Checker.tsx type -----------------

export type CheckerProps = {
  done: boolean;
  dateString: string;
  id: string;
};
// ----------------------------------------------------

// ----------------- Todo.tsx type -----------------

export type TodoProps = { data: TodoType };
// -------------------------------------------------
