import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import styles from './styles';
import useToggleTodo from '../../../hooks/apollo/useToggleTodo';
import { CheckerProps } from './types';

function Checker({ done, dateString, id }: CheckerProps) {
  const { toggleTodo, loading } = useToggleTodo();

  const onPress = () => {
    if (loading) return console.log('loading...');
    return toggleTodo({ dateString, id, done });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
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
