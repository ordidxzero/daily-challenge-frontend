import { StyleProp, TextStyle } from 'react-native';
// ----------------- ToDoManager.tsx type -----------------

export type ToDoManagerProps = {
  screenIndex?: number;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
};

export type KindProperty = {
  text: string | JSX.Element;
  buttonStyle: any;
  textStyle: any;
};

// -----------------------------------------------------
