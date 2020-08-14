import React from 'react';
import { View } from 'react-native';
import Day from './Day';
import styles from './styles';
import useSelectWeekdays from '../../../hooks/common/useSelectWeekdays';
import InputLayout from '../../common/InputLayout';
import { ListOfWeekdayProps } from './types';

function ListOfWeekday({ title, disabled = false }: ListOfWeekdayProps) {
  const { selectedWeekdays } = useSelectWeekdays();
  return (
    <InputLayout titleStyle={styles.listOfWeekdayTitle} title={title}>
      <View style={styles.listOfWeekdayContainer}>
        {selectedWeekdays.map(day => (
          <Day key={day.day} {...day} disabled={disabled} />
        ))}
      </View>
    </InputLayout>
  );
}

export default React.memo(ListOfWeekday);
