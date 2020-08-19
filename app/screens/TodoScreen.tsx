import React, { useLayoutEffect } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { CustomStackScreenProp } from './types';
import styles from './styles';
import dayjs from 'dayjs';
import TodoManager from '../components/main/TodoManager';
import FloatingPanelWrapper from '../components/common/FloatingPanelWrapper';
import useTogglePanel from '../hooks/floatingPanel/useTogglePanel';
import useDetailSetter from '../hooks/floatingPanel/useDetailSetter';
import Header from '../components/common/Header';
import useResetWeekdays from '../hooks/floatingPanel/useResetWeekdays';
import useInput from '../hooks/common/useInput';

const { width } = Dimensions.get('window');

function TodoScreen({
  navigation,
  route: {
    params: { data },
  },
}: CustomStackScreenProp<'Todo'>) {
  useDetailSetter(data.id);
  const resetSelectedWeekdays = useResetWeekdays();
  const { onChangeText, hardenForm } = useInput();
  const { todo } = hardenForm;
  const { setIsPanelActive } = useTogglePanel('todo');
  const openPanel = () => setIsPanelActive(true);

  useLayoutEffect(() => {
    onChangeText('todo', 'startDate')(data.dateString);
    onChangeText('todo', 'title')(data.title);
    onChangeText('todo', 'amount')(data.amount);
    onChangeText('todo', 'unit')(data.unit);
    onChangeText('todo', 'startTime')(data.startTime);
    onChangeText('todo', 'endTime')(data.endTime);
    return () => {
      resetSelectedWeekdays();
    };
  }, []);
  return (
    <FloatingPanelWrapper type="todo" data={data}>
      <Header navigation={navigation} type="todo" />
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
      </View>
      <TodoManager type="detail" onPress={openPanel} />
    </FloatingPanelWrapper>
  );
}

export default TodoScreen;
