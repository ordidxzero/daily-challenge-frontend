import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { todoStyle } from './styles';
import { TodoProps } from './types';
import Checker from './Checker';

function Todo({ data }: TodoProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Todo', { data })}>
      <View style={todoStyle.container}>
        <View>
          <Text
            style={
              todoStyle.timezone
            }>{`${data.startTime} ~ ${data.endTime}`}</Text>
          <Text
            style={
              todoStyle.content
            }>{`${data.title} ${data.amount}${data.unit}`}</Text>
        </View>
        <Checker done={data.done} dateString={data.dateString} id={data.id} />
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(Todo);
