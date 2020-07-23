import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import useSelectWeekdays from '../../../hooks/swipeablePanel/useSelectWeekdays';

function Day({ day, selected }: { day: string; selected: boolean }) {
  const { setSelectedWeekdays } = useSelectWeekdays();
  return (
    <TouchableOpacity onPress={() => setSelectedWeekdays(day)}>
      <View
        style={[
          styles.selectDayButton,
          selected && styles.selectedButtonBackgroundColor,
        ]}>
        <Text style={selected && styles.selectedButtonTextColor}>{day}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(Day);