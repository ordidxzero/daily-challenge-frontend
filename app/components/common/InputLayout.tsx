import React from 'react';
import { View, Text } from 'react-native';
import { InputLayoutProps } from './types';

function InputLayout({
  containerStyle,
  titleStyle,
  title,
  children,
}: InputLayoutProps) {
  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>{title}</Text>
      {children}
    </View>
  );
}

export default React.memo(InputLayout);
