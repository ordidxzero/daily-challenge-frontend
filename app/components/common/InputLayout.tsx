import React from 'react';
import { View, Text } from 'react-native';
import { InputLayoutProps } from './types';

function InputLayout({
  containerStyle,
  titleStyle,
  title,
  children,
  onTitlePress,
  showMessage = false,
}: InputLayoutProps) {
  return (
    <View style={containerStyle}>
      <Text
        style={[
          { textTransform: 'capitalize', alignItems: 'center' },
          titleStyle,
        ]}
        onPress={onTitlePress}>
        {title} {showMessage && <Text style={{ color: 'red' }}>(필수)</Text>}
      </Text>
      {children}
    </View>
  );
}

export default React.memo(InputLayout);
