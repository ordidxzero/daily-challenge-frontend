import { PanelContentProps } from '../../../@types';
// ----------------- InputSection.tsx type -----------------

export type InputSectionProps = {
  title: string;
  children: React.ReactNode;
};

// ---------------------------------------------------------

// ----------------- SwipeablePanel.tsx type -----------------

export type FloatingPanelWrapperProps = PanelContentProps & {
  containerStyle?: any;
  children: React.ReactNode;
};

// -----------------------------------------------------------
