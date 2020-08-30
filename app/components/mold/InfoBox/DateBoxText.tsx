import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import { DateBoxProps } from './type';
import useReduxState from '../../../hooks/common/useReduxState';

function DateBoxText({ text, fontSize }: DateBoxProps) {
  const {
    main: { darkMode },
  } = useReduxState();
  return <Text style={[styles.dateBoxTextColor, { fontSize }]}>{text}</Text>;
}

export default React.memo(DateBoxText);
