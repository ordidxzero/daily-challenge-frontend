import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../Input';
import useInput from '../../../hooks/common/useInput';
import DeleteButton from '../DeleteButton';
import useDeleteTodo from '../../../hooks/apollo/useDeleteTodo';
import useTogglePanel from '../../../hooks/floatingPanel/useTogglePanel';

function TodoPanelContent({ detail }: { detail: string }) {
  const navigation = useNavigation();
  const deleteTodo = useDeleteTodo();
  const { setIsPanelActive } = useTogglePanel();
  const { hardenForm, onChangeText } = useInput();
  const { todo } = hardenForm;

  const onPress = () =>
    deleteTodo({ dateString: todo.startDate, id: detail }).then(() => {
      navigation.goBack();
      setIsPanelActive(false);
    });

  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 15,
      }}>
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
      <DeleteButton onPress={onPress} type="panel" />
    </View>
  );
}

export default React.memo(TodoPanelContent);
