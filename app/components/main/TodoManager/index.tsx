import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { ToDoManagerProps } from './types';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';

const typeProperty = {
  create: {
    style: styles.todoCreateButton,
    textStyle: {},
    text: '+',
  },
  confirm: {
    style: styles.todoConfirmButton,
    textStyle: { marginTop: 4 },
    text: <Entypo name="check" size={30} />,
  },
  cancel: {
    style: styles.todoCancelButton,
    textStyle: {},
    text: '×',
  },
};

function ToDoManager({ onPress, type }: ToDoManagerProps) {
  const property = typeProperty[type];
  return (
    <TouchableOpacity
      style={[styles.touchableOpacity, property.style]}
      onPress={onPress}>
      <View>
        <Text style={[styles.touchableOpacityText, property.textStyle]}>
          {property.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(ToDoManager);
