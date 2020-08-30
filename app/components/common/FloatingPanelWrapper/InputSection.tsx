import React from 'react';
import { View, Text } from 'react-native';
import { InputSectionProps } from './types';
import { styles, darkModeStyle } from './styles';
import useReduxState from '../../../hooks/common/useReduxState';

function InputSection({ title, children }: InputSectionProps) {
  const {
    main: { darkMode },
  } = useReduxState();
  const dark = darkModeStyle(darkMode);
  return (
    <View>
      <View
        style={[
          styles.inputSectionTitleContainer,
          dark.inputSectionTitleContainer,
        ]}>
        <Text style={[styles.inputSectionTitle, dark.inputSectionTitleText]}>
          {title}
        </Text>
      </View>
      {children}
    </View>
  );
}

export default React.memo(InputSection);
