import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, Dimensions } from 'react-native';
import { CustomStackScreenProp } from './types';
import styles from './styles';
import dayjs from 'dayjs';
import TodoManager from '../components/main/TodoManager';
import SwipeablePanel from '../components/main/SwipeablePanel';
import useTogglePanel from '../hooks/swipeablePanel/useTogglePanel';
import useEditTodo from '../hooks/apollo/useEditTodo';
import useSelectedTodo from '../hooks/swipeablePanel/useSelectedTodo';

const { width } = Dimensions.get('window');

function TodoScreen({
  route: {
    params: { data },
  },
}: CustomStackScreenProp<'Todo'>) {
  const { setIsPanelActive, isTodoPanelActive } = useTogglePanel();
  const { editTodoBack, editTodoFront } = useEditTodo();
  const selectTodo = useSelectedTodo();
  const openPanel = () => setIsPanelActive('todo', true);
  const closePanel = () => {
    setIsPanelActive('todo', false);
    editTodoBack(data.id);
    editTodoFront(data.id, data.done);
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
        <SwipeablePanel type="todo" data={data} />
      </View>
    </SafeAreaView>
  );
}

export default TodoScreen;
