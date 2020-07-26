import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { ToDoManagerProps } from './types';
import styles from './styles';

function ToDoManager({ onPress }: ToDoManagerProps) {
  return (
    <TouchableOpacity
      style={[styles.touchableOpacity, styles.todoCreateButton]}
      onPress={onPress}>
      <View>
        <Text style={[styles.touchableOpacityText]}>+</Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(ToDoManager);
