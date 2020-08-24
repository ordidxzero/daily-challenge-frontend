import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { CustomStackScreenProp } from './types';
import styles from './styles';
import dayjs from 'dayjs';
import TodoManager from '../components/main/TodoManager';
import FloatingPanelWrapper from '../components/common/FloatingPanelWrapper';
import useTogglePanel from '../hooks/floatingPanel/useTogglePanel';
import Header from '../components/common/Header';
import useInput from '../hooks/common/useInput';
import useDetailSetter from '../hooks/floatingPanel/useDetailSetter';
import useUnmountReset from '../hooks/common/useUnmountReset';

const { width } = Dimensions.get('window');

function TodoScreen({
  route: {
    params: { data },
  },
}: CustomStackScreenProp<'Todo'>) {
  useDetailSetter(data.id);
  useUnmountReset();
  const [loading, setLoading] = useState(false);
  const { onChangeText, hardenForm } = useInput();
  const { todo } = hardenForm;
  const { setIsPanelActive } = useTogglePanel();
  const openPanel = () => setIsPanelActive(true);

  useEffect(() => {
    setLoading(true);
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
        <>
          <View style={{ flex: 1, width, padding: 20 }}>
            <View style={{ marginBottom: 30 }}>
              <Text style={{ fontSize: 30, fontWeight: '700' }}>
                {todo.title}
              </Text>
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
        </>
      )}
    </FloatingPanelWrapper>
  );
}

export default TodoScreen;
