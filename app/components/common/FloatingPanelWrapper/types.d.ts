import { TodoType, MoldDataType } from '../../../@types';
// ----------------- InputSection.tsx type -----------------

export type InputSectionProps = {
  title: string;
  children: React.ReactNode;
};

// ---------------------------------------------------------

// ----------------- SwipeablePanel.tsx type -----------------

export type FloatingPanelWrapperProps = {
  containerStyle?: any;
  type?: 'create' | 'todo' | 'mold';
  data?: TodoType | MoldDataType;
  children: React.ReactNode;
};

// -----------------------------------------------------------
