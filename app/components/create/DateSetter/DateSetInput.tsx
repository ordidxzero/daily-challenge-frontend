import React from 'react';
import { View } from 'react-native';
import Input from '../../common/Input';
import useInput from '../../../hooks/common/useInput';

function DateSetInput({ type }: { type: 'startDate' | 'endDate' }) {
  const { hardenForm, onChangeText } = useInput();
  const { todo } = hardenForm;
  const title = type === 'startDate' ? '시작 날짜' : '마지막 날짜';
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
      }}>
      <Input
        title={title}
        value={todo[type]}
        containerStyle={{ marginBottom: 0 }}
        onChangeText={onChangeText('todo', type)}
      />
    </View>
  );
}

export default React.memo(DateSetInput);
