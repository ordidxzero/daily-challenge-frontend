import React, { useRef } from 'react';
import { TextInput } from 'react-native';
import { InputProps } from './type';
import styles from './styles';
import InputLayout from '../InputLayout';

function Input({
  title,
  disabled = false,
  required = false,
  value,
  placeholder,
  onChangeText,
  keyboardType,
  secureTextEntry = false,
  containerStyle = {},
}: InputProps) {
  const textInput = useRef<TextInput>(null);
  const onTitlePress = () => textInput.current?.focus();
  return (
    <InputLayout
      containerStyle={[
        styles.inputContainer,
        containerStyle,
        required && value === '' && styles.requiredInputContainer,
      ]}
      showMessage={required && value === ''}
      titleStyle={styles.inputTitle}
      title={title}
      onTitlePress={onTitlePress}>
      <TextInput
        ref={textInput}
        editable={!disabled}
        selectTextOnFocus={false}
        value={value}
        onChangeText={onChangeText}
        style={[
          styles.textInputContainer,
          { color: disabled ? 'grey' : 'black' },
        ]}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCompleteType="off"
        keyboardType={keyboardType}
        returnKeyType="done"
      />
    </InputLayout>
  );
}

export default React.memo(Input);
