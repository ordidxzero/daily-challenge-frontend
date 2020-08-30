import React from 'react';
import { View, Text } from 'react-native';
import { InputLayoutProps } from './types';
import {
  inputRequireWarnColor,
  inputLayoutDarkModeTitleTextColor,
} from '../../config/styles';
import useReduxState from '../../hooks/common/useReduxState';

function InputLayout({
  containerStyle,
  titleStyle,
  title,
  children,
  onTitlePress,
  showMessage = false,
}: InputLayoutProps) {
  const {
    main: { darkMode },
  } = useReduxState();
  const dark = darkModeStyle(darkMode);
  return (
    <View style={containerStyle}>
      <Text
        style={[
          { textTransform: 'capitalize', alignItems: 'center' },
          dark,
          titleStyle,
        ]}
        onPress={onTitlePress}>
        {title}{' '}
        {showMessage && (
          <Text style={{ color: inputRequireWarnColor }}>(필수)</Text>
        )}
      </Text>
      {children}
    </View>
  );
}

const darkModeStyle = (darkMode: boolean) => ({
  color: darkMode ? inputLayoutDarkModeTitleTextColor : undefined,
});

export default React.memo(InputLayout);
