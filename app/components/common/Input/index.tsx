import React, { useRef } from 'react';
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
  containerStyle = {},
}: InputProps) {
  const textInput = useRef<TextInput>(null);
  const onTitlePress = () => textInput.current?.focus();
  return (
    <InputLayout
      containerStyle={[styles.inputContainer, containerStyle]}
      titleStyle={styles.inputTitle}
      title={title}
      onTitlePress={onTitlePress}>
      <TextInput
        ref={textInput}
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
        keyboardType="default"
      />
    </InputLayout>
  );
}

export default React.memo(Input);
