// Modules
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
// Utils
import { CustomStackScreenProp } from './types';
// Hooks
import useInput from '../hooks/common/useInput';
import useDetailSetter from '../hooks/floatingPanel/useDetailSetter';
import useUnmountReset from '../hooks/common/useUnmountReset';
// Components
import FloatingPanelWrapper from '../components/common/FloatingPanelWrapper';
import Header from '../components/common/ScreenHeader';
import TodoInfo from '../components/todo/TodoInfo';

function TodoScreen({
  route: {
    params: { data },
  },
}: CustomStackScreenProp<'Todo'>) {
  useDetailSetter(data.id);
  useUnmountReset();
  const [loading, setLoading] = useState(true);
  const { onChangeText } = useInput();

  useEffect(() => {
    onChangeText('todo', 'startDate')(data.dateString);
    onChangeText('todo', 'title')(data.title);
    onChangeText('todo', 'amount')(data.amount);
    onChangeText('todo', 'unit')(data.unit);
    onChangeText('todo', 'startTime')(data.startTime);
    onChangeText('todo', 'endTime')(data.endTime);
    setLoading(false);
  }, []);
  return (
    <FloatingPanelWrapper detail={data.id}>
      <Header type="todo" />
      {loading ? (
        <View>
          <Text>123</Text>
        </View>
      ) : (
        <TodoInfo />
      )}
    </FloatingPanelWrapper>
  );
}

export default TodoScreen;
