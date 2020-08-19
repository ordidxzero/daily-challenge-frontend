type RadioDataType = {
  key: string;
  label: string;
};

export type RadioState = {
  current: string;
  data: RadioDataType[];
};
