// ----------------- index.tsx type -----------------

type DataType = {
  key: string;
  label: string;
};

export type RadioState = {
  current: string;
  data: DataType[];
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
