import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { ToDoManagerProps } from './types';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';

function ToDoManager({ onPress, screenIndex, style }: ToDoManagerProps) {
  return (
    <TouchableOpacity
      style={[styles.touchableOpacity, styles.todoCreateButton, style]}
      onPress={onPress}>
      <View>
        <Text
          style={[
            styles.touchableOpacityText,
            !!screenIndex && { marginBottom: -3 },
          ]}>
          {screenIndex ? <Entypo name="cog" color="#fff" size={30} /> : '+'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(ToDoManager);
