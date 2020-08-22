import { RadioState } from '../../../@types';
// ----------------- index.tsx type -----------------

export type RadioProps = RadioState & {
  title: string;
  onPress: any;
  type?: 'circle' | 'rect';
};

// --------------------------------------------------

// ----------------- Button.tsx type -----------------

export type RadioButtonProps = {
  label: string;
  selected: boolean;
  onPress: any;
};
// ---------------------------------------------------
