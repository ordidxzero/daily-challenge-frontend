import React from 'react';
import { View, Dimensions } from 'react-native';
import Input from '../../Input';
import useInput from '../../../../hooks/common/useInput';
import { TodoDataType } from '../../../../@types';
import TodoManager from '../../../main/TodoManager';
import useEditTodo from '../../../../hooks/apollo/useEditTodo';
import useTogglePanel from '../../../../hooks/floatingPanel/useTogglePanel';
import useLoadingState from '../../../../hooks/common/useLoadingState';

const { width } = Dimensions.get('window');

function TodoPanelContent({ data }: { data: TodoDataType }) {
  const loading = useLoadingState('editTodo');
  const editTodo = useEditTodo();
  const { setIsPanelActive } = useTogglePanel('todo');
  const { hardenForm, onChangeText } = useInput();
  const { todo } = hardenForm;

  console.log(loading);

  const closePanel = () =>
    editTodo(data.id, data.todoMoldId).then(() => setIsPanelActive(false));

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
      <View
        style={{
          height: 150,
          position: 'relative',
          width,
        }}>
        <TodoManager type="detail" onPress={closePanel} />
      </View>
    </View>
  );
}

export default React.memo(TodoPanelContent);
