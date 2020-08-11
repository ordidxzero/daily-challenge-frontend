import React, { useLayoutEffect } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { CustomStackScreenProp } from './types';
import styles from './styles';
import dayjs from 'dayjs';
import TodoManager from '../components/main/TodoManager';
import FloatingPanelWrapper from '../components/common/FloatingPanelWrapper';
import useTogglePanel from '../hooks/floatingPanel/useTogglePanel';
import useSelectedTodo from '../hooks/floatingPanel/useSelectedTodo';
import Header from '../components/todo/Header';
import useResetState from '../hooks/floatingPanel/useResetState';
import useInput from '../hooks/common/useInput';

const { width } = Dimensions.get('window');

function TodoScreen({
  navigation,
  route: {
    params: { data },
  },
}: CustomStackScreenProp<'Todo'>) {
  useSelectedTodo(data.id);
  const resetReduxState = useResetState();
  const { onChangeText, hardenForm } = useInput();
  const { todo } = hardenForm;
  const { setIsPanelActive, setStatusBarStyle } = useTogglePanel('todo');
  const openPanel = () => {
    setStatusBarStyle('light-content');
    setIsPanelActive(true);
  };

  useLayoutEffect(() => {
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
    <FloatingPanelWrapper type="todo" data={data}>
      <Header navigation={navigation} />
      <View style={{ flex: 1, width, padding: 20 }}>
        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 30, fontWeight: '700' }}>{todo.title}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={[{ fontSize: 15 }, styles.color]}>
            {dayjs(todo.startDate).format('YYYY / MM / DD dddd')}
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text style={[{ fontSize: 15 }, styles.color]}>
            {`${todo.startTime} ~ ${todo.endTime}`}
          </Text>
        </View>
        <TodoManager type="detail" onPress={openPanel} />
      </View>
    </FloatingPanelWrapper>
  );
}

export default TodoScreen;
