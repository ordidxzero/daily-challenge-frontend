import React from 'react';
import { View } from 'react-native';
import Day from './Day';
import styles from './styles';
import useSelectWeekdays from '../../../hooks/swipeablePanel/useSelectWeekdays';
import InputLayout from '../../common/InputLayout';

function ListOfWeekday() {
  const { selectedWeekdays } = useSelectWeekdays();
  return (
    <InputLayout
      titleStyle={styles.listOfWeekdayTitle}
      title="무슨 요일마다 반복할 지?">
      <View style={styles.listOfWeekdayContainer}>
        {selectedWeekdays.map(day => (
          <Day key={day.day} {...day} />
        ))}
      </View>
    </InputLayout>
  );
}

export default React.memo(ListOfWeekday);
