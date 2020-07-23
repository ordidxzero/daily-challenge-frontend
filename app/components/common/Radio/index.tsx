import React from 'react';
import InputLayout from '../InputLayout';
import { RadioProps } from './types';
import RadioButton from './RadioButton';
import { View } from 'react-native';
import styles from './styles';

function Radio({ current, data, onPress, title }: RadioProps) {
  return (
    <InputLayout
      containerStyle={{ marginBottom: 25 }}
      titleStyle={styles.radioTitle}
      title={title}>
      <View style={styles.radioContainer}>
        {data.map(item => (
          <RadioButton
            key={item}
            label={item}
            selected={current === item}
            onPress={onPress(item)}
          />
        ))}
      </View>
    </InputLayout>
  );
}

export default React.memo(Radio);
