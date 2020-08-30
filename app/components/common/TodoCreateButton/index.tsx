import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles, darkModeStyle } from './styles';
import useReduxState from '../../../hooks/common/useReduxState';

function TodoCreateButton({ onPress }: { onPress: any }) {
  const {
    main: { darkMode },
  } = useReduxState();
  const dark = darkModeStyle(darkMode);
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, dark.buttonContainer]}
      onPress={onPress}>
      <View>
        <Text style={[styles.buttonText, dark.buttonText]}>추가하기</Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(TodoCreateButton);
