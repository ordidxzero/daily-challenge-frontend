import React, { useEffect } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { CustomStackScreenProp } from './types';
import styles from './styles';
import dayjs from 'dayjs';
import TodoManager from '../components/main/TodoManager';
import SwipeablePanel from '../components/common/SwipeablePanel';
import useTogglePanel from '../hooks/swipeablePanel/useTogglePanel';
import useEditTodo from '../hooks/apollo/useEditTodo';
import useSelectedTodo from '../hooks/swipeablePanel/useSelectedTodo';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

function TodoScreen({
  route: {
    params: { data },
  },
}: CustomStackScreenProp<'Todo'>) {
  const {
    setIsPanelActive,
    isTodoPanelActive,
    setStatusBarStyle,
  } = useTogglePanel();
  const { editTodoBack, editTodoFront } = useEditTodo();
  const selectTodo = useSelectedTodo();
  const openPanel = () => {
    setStatusBarStyle('light-content');
    setIsPanelActive('todo', true);
  };
  const closePanel = () => {
    setIsPanelActive('todo', false);
    editTodoBack(data.id);
    editTodoFront(data.id, data.done);
  };
  useEffect(() => {
    selectTodo(data.id);
  }, []);
  return (
    <SwipeablePanel type="todo" data={data}>
      <View
        style={{
          width,
          height: 50,
          paddingHorizontal: 20,
          backgroundColor: 'blue',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableWithoutFeedback>
          <Text>{'<'}</Text>
        </TouchableWithoutFeedback>
        <View>
          <Text>ㅅㅔ부사항</Text>
        </View>
        <TouchableWithoutFeedback>
          <Text>{'delete'}</Text>
        </TouchableWithoutFeedback>
      </View>
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
      </View>
    </SwipeablePanel>
  );
}

export default TodoScreen;
