import React, { useEffect } from 'react';
import { View } from 'react-native';
import Input from '../../Input';
import useInput from '../../../../hooks/common/useInput';
import useResetState from '../../../../hooks/floatingPanel/useResetState';
import { TodoType } from '../../../../@types';

function TodoPanelContent({ data }: { data: TodoType }) {
  const resetReduxState = useResetState();
  const { hardenForm, onChangeText } = useInput();
  const { todo } = hardenForm;

  useEffect(() => {
    onChangeText('todo', 'startDate')(data.dateString);
    onChangeText('todo', 'title')(data.title);
    onChangeText('todo', 'amount')(String(data.amount));
    onChangeText('todo', 'unit')(data.unit);
    onChangeText('todo', 'startTime')(data.startTime);
    onChangeText('todo', 'endTime')(data.endTime);
    return () => {
      resetReduxState();
    };
  }, []);

  return (
    <View style={{ alignItems: 'center', marginTop: 15 }}>
      <Input
        title="Date"
        disabled={true}
        value={todo.startDate}
        onChangeText={onChangeText('todo', 'startDate')}
      />
      <Input
        title="Title"
        placeholder="푸쉬업"
        value={todo.title}
        onChangeText={onChangeText('todo', 'title')}
      />
      <Input
        title="Amount"
        placeholder="5"
        value={todo.amount}
        onChangeText={onChangeText('todo', 'amount')}
      />
      <Input
        title="Unit"
        placeholder="개"
        value={todo.unit}
        onChangeText={onChangeText('todo', 'unit')}
      />
      <Input
        title="Start Time"
        placeholder="09:00"
        value={todo.startTime}
        onChangeText={onChangeText('todo', 'startTime')}
      />
      <Input
        title="End Time"
        placeholder="10:00"
        value={todo.endTime}
        onChangeText={onChangeText('todo', 'endTime')}
      />
    </View>
  );
}

export default React.memo(TodoPanelContent);
