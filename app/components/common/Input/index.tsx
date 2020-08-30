import React, { useRef } from 'react';
import { TextInput } from 'react-native';
import { InputProps } from './type';
import { styles, darkModeStyle } from './styles';
import InputLayout from '../InputLayout';
import useReduxState from '../../../hooks/common/useReduxState';
import { inputPlaceholderTextColor } from '../../../config/styles';

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
  const {
    main: { darkMode },
  } = useReduxState();
  const textInput = useRef<TextInput>(null);
  const onTitlePress = () => textInput.current?.focus();
  const dark = darkModeStyle(darkMode);
  return (
    <InputLayout
      containerStyle={[
        styles.inputContainer,
        dark.inputContainer,
        containerStyle,
        required && value === '' && dark.requiredInputContainer,
      ]}
      showMessage={required && value === ''}
      titleStyle={[styles.inputTitle, dark.inputTitle]}
      title={title}
      onTitlePress={onTitlePress}>
      <TextInput
        ref={textInput}
        editable={!disabled}
        selectTextOnFocus={false}
        value={value}
        onChangeText={onChangeText}
        style={[styles.textInputContainer, dark.textInputContainer]}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={darkMode ? inputPlaceholderTextColor : undefined}
        autoCapitalize="none"
        autoCompleteType="off"
        keyboardType={keyboardType}
        returnKeyType="done"
      />
    </InputLayout>
  );
}

export default React.memo(Input);
