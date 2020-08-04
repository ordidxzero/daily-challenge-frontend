import React from 'react';
import { View, Text } from 'react-native';
import { InputLayoutProps } from './types';

function InputLayout({
  containerStyle,
  titleStyle,
  title,
  children,
  onTitlePress,
}: InputLayoutProps) {
  return (
    <View style={containerStyle}>
      <Text
        style={[{ textTransform: 'capitalize' }, titleStyle]}
        onPress={onTitlePress}>
        {title}
      </Text>
      {children}
    </View>
  );
}

export default React.memo(InputLayout);
