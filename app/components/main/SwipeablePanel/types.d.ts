// ----------------- InputSection.tsx type -----------------

import { TodoType } from '../../../@types';

export type InputSectionProps = {
  title: string;
  children: React.ReactNode;
};

// ---------------------------------------------------------

// ----------------- SwipeablePanel.tsx type -----------------

export type SwipeablePanelProps = {
  containerStyle?: any;
  panelHeight: number;
  type?: 'create' | 'todo';
  data?: TodoType;
  children: React.ReactNode;
};

// -----------------------------------------------------------
