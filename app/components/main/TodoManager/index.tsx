import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { ToDoManagerProps } from './types';
import styles from './styles';

function ToDoManager({ onPress, type }: ToDoManagerProps) {
  return (
    <TouchableOpacity
      style={[
        styles.touchableOpacity,
        styles.detailButton,
        !type && styles.todoCreateButton,
      ]}
      onPress={onPress}>
      <View>
        <Text
          style={[styles.touchableOpacityText, type && { marginBottom: -3 }]}>
          +
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(ToDoManager);
