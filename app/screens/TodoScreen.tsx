import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, Dimensions } from 'react-native';
import { CustomStackScreenProp } from './types';
import styles from './styles';
import dayjs from 'dayjs';
import TodoManager from '../components/main/TodoManager';
import { TodoPanel } from '../components/main/SwipeablePanel';
import useTogglePanel from '../hooks/swipeablePanel/useTogglePanel';
import useEditTodo from '../hooks/swipeablePanel/useEditTodo';
import useEditTodoDB from '../hooks/apollo/useEditTodoDB';
import useSelectedTodo from '../hooks/swipeablePanel/useSelectedTodo';

const { width } = Dimensions.get('window');

function TodoScreen({
  route: {
    params: { data },
  },
}: CustomStackScreenProp<'Todo'>) {
  const { setIsPanelActive, isTodoPanelActive } = useTogglePanel();
  const editTodo = useEditTodo();
  const selectTodo = useSelectedTodo();
  const editTodoMutation = useEditTodoDB();
  const openPanel = () => setIsPanelActive('todo', true);
  const closePanel = () => {
    setIsPanelActive('todo', false);
    editTodoMutation(data.id);
    editTodo(data.id, data.done);
  };
  useEffect(() => {
    selectTodo(data.id);
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={{ flex: 1, width, padding: 20 }}>
        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 30, fontWeight: '700' }}>{data.title}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={[{ fontSize: 15 }, styles.color]}>
            {dayjs(data.dateString).format('YYYY / MM / DD dddd')}
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text style={[{ fontSize: 15 }, styles.color]}>
            {`${data.startTime} ~ ${data.endTime}`}
          </Text>
        </View>
        <TodoManager
          type="detail"
          onPress={isTodoPanelActive ? closePanel : openPanel}
        />
        <TodoPanel data={data} />
      </View>
    </SafeAreaView>
  );
}

export default TodoScreen;
