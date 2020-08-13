// Modules
import React from 'react';
import { CalendarList } from 'react-native-calendars';
import { View } from 'react-native';
// Hooks
import useSelectDay from '../../../hooks/common/useSelectDay';
// Components
import TodoList from '../TodoList';
// Utils
import styles from './styles';

function Calendar() {
  const { selectedDay, setSelectedDay } = useSelectDay();
  return (
    <>
      <View style={styles.calendarContainer}>
        <CalendarList
          onDayPress={day => setSelectedDay(day.dateString)}
          current={selectedDay}
          markedDates={{
            [selectedDay]: { selected: true },
          }}
          theme={{
            selectedDayBackgroundColor: '#2ecc71',
            selectedDayTextColor: 'white',
          }}
          horizontal={true}
          pagingEnabled={true}
          pastScrollRange={12}
          futureScrollRange={12}
        />
      </View>
      <TodoList />
    </>
  );
}

export default React.memo(Calendar);
