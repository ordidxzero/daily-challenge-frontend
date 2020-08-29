import React from 'react';
import { Button } from 'react-native-paper';
import InputLayout from '../InputLayout';
import { RadioProps } from './types';
import RadioButton from './RadioButton';
import { View } from 'react-native';
import styles from './styles';
import {
  selectedRectRadioButtonBackgroundColor,
  rectRadioButtonDefaultBackgroundColor,
} from '../../../config/styles';

function Radio({ current, data, onPress, title, type = 'circle' }: RadioProps) {
  return (
    <InputLayout
      containerStyle={{ marginBottom: 25 }}
      titleStyle={styles.radioTitle}
      title={title}>
      <View style={styles.radioContainer}>
        {type === 'circle' &&
          data.map(item => (
            <RadioButton
              key={item.key}
              label={item.label}
              selected={current === item.key}
              onPress={onPress(item.key)}
            />
          ))}
        {type === 'rect' &&
          data.map(item => (
            <Button
              mode="contained"
              key={item.key}
              color={
                current === item.key
                  ? selectedRectRadioButtonBackgroundColor
                  : rectRadioButtonDefaultBackgroundColor
              }
              onPress={onPress(item.key)}>
              {item.label}
            </Button>
          ))}
      </View>
    </InputLayout>
  );
}

export default React.memo(Radio);
