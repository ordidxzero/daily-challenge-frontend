// Modules
import React, { useState, useEffect } from 'react';
import { CalendarList } from 'react-native-calendars';
import { View } from 'react-native';
import dayjs from 'dayjs';
// Hooks
import useSelectDay from '../../../hooks/common/useSelectDay';
// Components
import TodoList from '../TodoList';
// Utils
import { styles } from './styles';
import Header from './Header';
import {
  selectedDayBackgroundColor,
  selectedDayTextColor,
  calendarDarkModeBackgroundColor,
} from '../../../config/styles';
import useReduxState from '../../../hooks/common/useReduxState';

function Calendar() {
  const {
    main: { darkMode },
  } = useReduxState();
  const { selectedDay, setSelectedDay } = useSelectDay();
  const [visibleMonth, setVisibleMonth] = useState(dayjs().format('MMMM YYYY'));
  const [calendarKey, forcedExecutor] = useState(1);
  useEffect(() => {
    forcedExecutor(prev => prev + 1);
  }, [darkMode]);
  return (
    <>
      <View style={styles.calendarContainer}>
        <Header month={visibleMonth} />
        <CalendarList
          key={calendarKey}
          onDayPress={day => setSelectedDay(day.dateString)}
          current={selectedDay}
          markedDates={{
            [selectedDay]: { selected: true },
          }}
          theme={{
            selectedDayBackgroundColor,
            dayTextColor: 'grey',
            selectedDayTextColor,
            calendarBackground: darkMode
              ? calendarDarkModeBackgroundColor
              : 'white',
            'stylesheet.calendar.header': {
              header: { display: 'none' },
            },
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
