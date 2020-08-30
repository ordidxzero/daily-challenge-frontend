import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import useSelectWeekdays from '../../../hooks/common/useSelectWeekdays';
import { DayProps } from './types';
import useReduxState from '../../../hooks/common/useReduxState';

function Day({ day, selected, disabled }: DayProps) {
  const {
    main: { darkMode },
  } = useReduxState();
  const { setSelectedWeekdays } = useSelectWeekdays();
  return (
    <TouchableOpacity
      onPress={() => setSelectedWeekdays(day)}
      disabled={disabled}>
      <View
        style={[
          styles.selectDayButton,
          selected && styles.selectedButtonBackgroundColor,
          darkMode && { borderWidth: 0 },
        ]}>
        <Text style={selected && styles.selectedButtonTextColor}>{day}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(Day);
