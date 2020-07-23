// ----------------- index.tsx type -----------------

export type RadioState = {
  current: string;
  data: string[];
};

export type RadioProps = RadioState & {
  title: string;
  onPress: any;
};

// --------------------------------------------------

// ----------------- Button.tsx type -----------------

export type RadioData = {
  label: string;
  selected: boolean;
  onPress: any;
};
// ---------------------------------------------------
