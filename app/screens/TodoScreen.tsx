// Modules
import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions } from 'react-native';
import dayjs from 'dayjs';
// Utils
import styles from './styles';
import { CustomStackScreenProp } from './types';
// Hooks
import useInput from '../hooks/common/useInput';
import useDetailSetter from '../hooks/floatingPanel/useDetailSetter';
import useUnmountReset from '../hooks/common/useUnmountReset';
// Components
import FloatingPanelWrapper from '../components/common/FloatingPanelWrapper';
import Header from '../components/common/Header';

const { width } = Dimensions.get('window');

function TodoScreen({
  route: {
    params: { data },
  },
}: CustomStackScreenProp<'Todo'>) {
  useDetailSetter(data.id);
  useUnmountReset();
  const [loading, setLoading] = useState(true);
  const { onChangeText, hardenForm } = useInput();
  const { todo } = hardenForm;

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
        </>
      )}
    </FloatingPanelWrapper>
  );
}

export default TodoScreen;
