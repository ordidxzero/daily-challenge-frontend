import React from 'react';
import { View } from 'react-native';
import Input from '../../common/Input';
import useInput from '../../../hooks/common/useInput';

function DateSetInput({
  type,
  title,
}: {
  type: 'startDate' | 'endDate';
  title: string;
}) {
  const { hardenForm, onChangeText } = useInput();
  const { todo } = hardenForm;
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
