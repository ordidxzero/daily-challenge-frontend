import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { todoStyle, darkModeStyle } from './styles';
import { TodoProps } from './types';
import Checker from './Checker';
import useReduxState from '../../../hooks/common/useReduxState';

function Todo({ data }: TodoProps) {
  const {
    main: { darkMode },
  } = useReduxState();
  const navigation = useNavigation();
  const dark = darkModeStyle(darkMode);
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Todo', { data })}>
      <View style={[todoStyle.container, dark.todoContainer]}>
        <View>
          <Text
            style={[
              todoStyle.timezone,
              dark.timezone,
            ]}>{`${data.startTime} ~ ${data.endTime}`}</Text>
          <Text
            style={[
              todoStyle.content,
              dark.content,
            ]}>{`${data.title} ${data.amount}${data.unit}`}</Text>
        </View>
        <Checker done={data.done} dateString={data.dateString} id={data.id} />
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(Todo);
