import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { TodoType } from '../../../@types';
import Checker from './Checker';
import { useNavigation } from '@react-navigation/native';

function Todo({ data }: { data: TodoType }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Todo', { data })}>
      <View style={styles.todoContainer}>
        <View>
          <Text
            style={
              styles.timezone
            }>{`${data.startTime} ~ ${data.endTime}`}</Text>
          <Text
            style={
              styles.content
            }>{`${data.title} ${data.amount}${data.unit}`}</Text>
        </View>
        <Checker done={data.done} dateString={data.dateString} id={data.id} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default React.memo(Todo);
