import { StyleSheet } from 'react-native';
import {
  selectDayButtonBorderColor,
  selectedDayButtonBackgroundColor,
} from '../../../config/styles';

const styles = StyleSheet.create({
  listOfWeekdayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  listOfWeekdayTitle: {
    fontSize: 15,
    marginBottom: 20,
  },
  selectDayButton: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    borderWidth: 1,
    borderColor: selectDayButtonBorderColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButtonBackgroundColor: {
    backgroundColor: selectedDayButtonBackgroundColor,
  },
  selectedButtonTextColor: { color: 'white' },
});

export default styles;
