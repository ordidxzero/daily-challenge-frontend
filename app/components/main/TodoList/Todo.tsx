import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { TodoType } from '../../../@types';
import Checker from './Checker';

function Todo({
  title,
  amount,
  done,
  startTime,
  endTime,
  unit,
  id,
  dateString,
}: TodoType) {
  return (
    <View style={styles.todoContainer}>
      <View>
        <Text style={styles.timezone}>{`${startTime} ~ ${endTime}`}</Text>
        <Text style={styles.content}>{`${title} ${amount}${unit}`}</Text>
      </View>
      <Checker done={done} dateString={dateString} id={id} />
    </View>
  );
}

export default React.memo(Todo);
