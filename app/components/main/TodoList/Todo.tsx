import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { TodoType } from './types';

function Todo({ title, amount, done, startTime, endTime }: TodoType) {
  return (
    <View style={styles.todoContainer}>
      <View>
        <Text style={styles.timezone}>{`${startTime} ~ ${endTime}`}</Text>
        <Text style={styles.content}>{`${title} ${amount}개 하기 ${
          done ? '완료' : '미완료'
        }`}</Text>
      </View>
    </View>
  );
}

export default React.memo(Todo);
