import React from 'react';
import { View, Text } from 'react-native';
import { InputSectionProps } from './types';
import styles from './styles';

function InputSection({ title, children }: InputSectionProps) {
  return (
    <View>
      <View style={styles.inputSectionTitleContainer}>
        <Text style={styles.inputSectionTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

export default React.memo(InputSection);
