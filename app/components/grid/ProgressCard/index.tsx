// Modules
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Utils
import { progressCardStyle, darkModeStyle } from './styles';
import { ProgressCardProps } from './types';
import useReduxState from '../../../hooks/common/useReduxState';

function ProgressCard({ data }: ProgressCardProps) {
  const {
    main: { darkMode },
  } = useReduxState();
  const navigation = useNavigation();
  const dark = darkModeStyle(darkMode);
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Mold', { data })}>
      <View style={[progressCardStyle.container, dark.container]}>
        <Text style={dark.titleText}>{data.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(ProgressCard);
