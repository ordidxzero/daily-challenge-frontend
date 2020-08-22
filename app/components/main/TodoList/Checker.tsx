import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import styles from './styles';
import useToggleTodo from '../../../hooks/apollo/useToggleTodo';
import { CheckerProps } from './types';

function Checker({ done, dateString, id }: CheckerProps) {
  const toggleTodo = useToggleTodo();

  return (
    <TouchableWithoutFeedback
      onPress={() => toggleTodo({ dateString, id, done })}>
      <View
        style={[
          styles.checkerDefaultStyle,
          done ? styles.done : styles.undone,
        ]}>
        <Text style={done ? styles.doneText : styles.undoneText}>
          {done ? '✓' : '✕'}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default React.memo(Checker);
