import React from 'react';
import { Text, ScrollView } from 'react-native';
import { AgendaDataType } from '../../../@types';
import Todo from './Todo';
import styles from './styles';

function DayComponent({ dateString, todos }: AgendaDataType) {
  return (
    <ScrollView
      style={styles.dayComponentContainer}
      contentContainerStyle={{ alignItems: 'center' }}
      showsVerticalScrollIndicator={false}>
      <Text style={{ fontWeight: '600', marginBottom: 20 }}>{dateString}</Text>
      {todos.length === 0 && <Text>할 일이 없습니다! 추가해주세요</Text>}
      {todos.map(todo => (
        <Todo key={todo.id} data={todo} />
      ))}
    </ScrollView>
  );
}

export default React.memo(DayComponent);
