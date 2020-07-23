import React from 'react';
import { TextInput } from 'react-native';
import { InputProps } from './type';
import styles from './styles';
import InputLayout from '../InputLayout';

function Input({
  title,
  disabled = false,
  value,
  placeholder,
  onChangeText,
}: InputProps) {
  return (
    <InputLayout
      containerStyle={styles.inputContainer}
      titleStyle={styles.inputTitle}
      title={title}>
      <TextInput
        editable={!disabled}
        selectTextOnFocus={!disabled}
        value={value}
        onChangeText={onChangeText}
        style={[
          styles.textInputContainer,
          { color: disabled ? 'grey' : 'black' },
        ]}
        placeholder={placeholder}
        autoCapitalize="none"
      />
    </InputLayout>
  );
}

export default React.memo(Input);
