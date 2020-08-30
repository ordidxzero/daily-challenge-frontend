import React from 'react';
import { View, Text } from 'react-native';
import { customCloseEnabledTextColor } from '../../../config/styles';

function CustomClose({ disabled }: { disabled: boolean }) {
  return (
    <View
      style={{
        height: 30,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 17,
          color: disabled ? 'grey' : customCloseEnabledTextColor,
        }}>
        완료
      </Text>
    </View>
  );
}

export default CustomClose;
