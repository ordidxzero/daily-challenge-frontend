import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import dayjs from 'dayjs';
import styles from './styles';
import useInput from '../../hooks/common/useInput';

const { width } = Dimensions.get('window');

function TodoInfo() {
  const {
    hardenForm: {
      todo: { startDate, title, startTime, endTime },
    },
  } = useInput();
  return (
    <View style={{ flex: 1, width, padding: 20 }}>
      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: 30, fontWeight: '700' }}>{title}</Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.todoTextStyle}>
          {dayjs(startDate).format('YYYY / MM / DD dddd')}
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.todoTextStyle}>{`${startTime} ~ ${endTime}`}</Text>
      </View>
    </View>
  );
}

export default React.memo(TodoInfo);
