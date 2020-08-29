import React from 'react';
import { Text, ScrollView } from 'react-native';
import { AgendaDataType } from '../../../@types';
import Todo from './Todo';
import { dayComponentStyle, darkModeStyle } from './styles';
import useReduxState from '../../../hooks/common/useReduxState';

function DayComponent({ dateString, todos }: AgendaDataType) {
  const {
    main: { darkMode },
  } = useReduxState();
  const dark = darkModeStyle(darkMode);
  return (
    <ScrollView
      contentContainerStyle={dayComponentStyle.container}
      showsVerticalScrollIndicator={false}>
      <Text style={[dayComponentStyle.dateString, dark.dateString]}>
        {dateString}
      </Text>
      {todos.length === 0 && <Text>할 일이 없습니다! 추가해주세요</Text>}
      {todos.map(todo => (
        <Todo key={todo.id} data={todo} />
      ))}
    </ScrollView>
  );
}

export default React.memo(DayComponent);
