import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { CustomStackScreenProp } from './types';
import styles from './styles';
import Input from '../components/common/Input';
import useInput from '../hooks/common/useInput';

function TodoScreen({
  route: {
    params: { data },
  },
}: CustomStackScreenProp<'Todo'>) {
  const { hardenForm, onChangeText } = useInput();
  const { todo } = hardenForm;
  useEffect(() => {
    onChangeText('todo', 'title')(data.title);
    onChangeText('todo', 'amount')(String(data.amount));
    onChangeText('todo', 'unit')(data.unit);
    onChangeText('todo', 'startTime')(data.startTime);
    onChangeText('todo', 'endTime')(data.endTime);
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Input
        title="Title"
        value={todo.title}
        onChangeText={onChangeText('todo', 'title')}
      />
      <Input
        title="amount"
        value={todo.amount}
        onChangeText={onChangeText('todo', 'amount')}
      />
      <Input
        title="unit"
        value={todo.unit}
        onChangeText={onChangeText('todo', 'unit')}
      />
      <Input
        title="start Time"
        value={todo.startTime}
        onChangeText={onChangeText('todo', 'startTime')}
      />
      <Input
        title="end Time"
        value={todo.endTime}
        onChangeText={onChangeText('todo', 'endTime')}
      />
    </SafeAreaView>
  );
}

export default TodoScreen;
