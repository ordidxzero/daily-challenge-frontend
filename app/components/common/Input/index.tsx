import React from 'react';
import { View, TextInput } from 'react-native';
import { InputProps } from './type';
import styles from './style';
import InputLayout from '../InputLayout';

function Input({
  title,
  disabled = false,
  value,
  placeholder,
  onChangeText,
}: InputProps) {
  return (
    <View style={{ marginBottom: 25 }}>
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
    </View>
  );
}

export default React.memo(Input);
