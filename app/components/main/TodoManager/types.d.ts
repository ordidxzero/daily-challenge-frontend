// ----------------- ToDoManager.tsx type -----------------

export type ToDoManagerProps = {
  type?: 'detail';
  onPress?: () => void;
};

export type KindProperty = {
  text: string | JSX.Element;
  buttonStyle: any;
  textStyle: any;
};

// -----------------------------------------------------
