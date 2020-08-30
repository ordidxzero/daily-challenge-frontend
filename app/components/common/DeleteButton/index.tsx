import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function DeleteButton({
  type,
  onPress,
}: {
  onPress: any;
  type: 'panel' | 'screen';
}) {
  return (
    <TouchableOpacity
      style={[styles.default, type === 'screen' && styles.screen]}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text
        style={{
          color: '#f5f6fa',
          fontWeight: '700',
        }}>
        삭제하기
      </Text>
    </TouchableOpacity>
  );
}

export default React.memo(DeleteButton);
