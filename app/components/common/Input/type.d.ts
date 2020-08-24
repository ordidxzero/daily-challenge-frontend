import { KeyboardTypeOptions } from 'react-native';

export type InputProps = {
  title: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;
  containerStyle?: any;
};
