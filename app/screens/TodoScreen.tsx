// Modules
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
// Utils
import { CustomStackScreenProp } from './types';
// Hooks
import useInput from '../hooks/common/useInput';
import useDetailSetter from '../hooks/floatingPanel/useDetailSetter';
import useUnmountReset from '../hooks/common/useUnmountReset';
import useDeleteTodo from '../hooks/apollo/useDeleteTodo';
// Components
import FloatingPanelWrapper from '../components/common/FloatingPanelWrapper';
import Header from '../components/common/ScreenHeader';
import TodoInfo from '../components/todo/TodoInfo';
import DeleteButton from '../components/common/DeleteButton';

function TodoScreen({
  navigation,
  route: {
    params: { data },
  },
}: CustomStackScreenProp<'Todo'>) {
  const { id, dateString, title, amount, unit, startTime, endTime } = data;
  useDetailSetter(id);
  useUnmountReset();
  const { deleteTodo, loading: deleteLoading } = useDeleteTodo();
  const [loading, setLoading] = useState(true);
  const { onChangeText } = useInput();
  const onPress = () =>
    deleteTodo({ dateString, id }).then(() => navigation.goBack());

  useEffect(() => {
    onChangeText('todo', 'startDate')(dateString);
    onChangeText('todo', 'title')(title);
    onChangeText('todo', 'amount')(amount);
    onChangeText('todo', 'unit')(unit);
    onChangeText('todo', 'startTime')(startTime);
    onChangeText('todo', 'endTime')(endTime);
    setLoading(false);
  }, []);
  return (
    <FloatingPanelWrapper detail={id}>
      <Header type="todo" />
      {loading ? (
        <View>
          <Text>Skeleton</Text>
        </View>
      ) : (
        <>
          <TodoInfo />
          <DeleteButton
            type="screen"
            loading={deleteLoading}
            onPress={onPress}
          />
        </>
      )}
    </FloatingPanelWrapper>
  );
}

export default TodoScreen;
