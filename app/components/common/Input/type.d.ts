export type InputProps = {
  title: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
};
