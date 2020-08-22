// Modules
import React, { useState } from 'react';
import { CalendarList } from 'react-native-calendars';
import { View } from 'react-native';
import dayjs from 'dayjs';
// Hooks
import useSelectDay from '../../../hooks/common/useSelectDay';
// Components
import TodoList from '../TodoList';
// Utils
import styles from './styles';
import Header from './Header';

function Calendar() {
  const { selectedDay, setSelectedDay } = useSelectDay();
  const [visibleMonth, setVisibleMonth] = useState(dayjs().format('MMMM YYYY'));
  return (
    <>
      <View style={styles.calendarContainer}>
        <Header month={visibleMonth} />
        <CalendarList
          onDayPress={day => setSelectedDay(day.dateString)}
          current={selectedDay}
          markedDates={{
            [selectedDay]: { selected: true },
          }}
          theme={{
            selectedDayBackgroundColor: '#2ecc71',
            selectedDayTextColor: 'white',
            'stylesheet.calendar.header': { header: { display: 'none' } },
          }}
          onVisibleMonthsChange={months =>
            setVisibleMonth(
              dayjs(months[months.length - 1].dateString).format('MMMM YYYY'),
            )
          }
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
