import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import styles from './styles';
import useToggleTodo from '../../../hooks/todoList/useToggleTodo';

function Checker({
  done,
  dateString,
  id,
}: {
  done: boolean;
  dateString: string;
  id: string;
}) {
  const toggleTodo = useToggleTodo();
  return (
    <TouchableWithoutFeedback onPress={() => toggleTodo({ dateString, id })}>
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
