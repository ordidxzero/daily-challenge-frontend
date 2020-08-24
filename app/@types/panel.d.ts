import { TodoDataType, MoldDataType } from './data';

export type PanelType = 'create' | 'todo' | 'mold';

export type PanelContentProps = {
  type?: PanelType;
  data: TodoDataType | MoldDataType;
};
