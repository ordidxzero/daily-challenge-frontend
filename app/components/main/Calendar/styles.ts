import { StyleSheet } from 'react-native';
import { calendarHeaderTextColor } from '../../../config/styles';

const styles = StyleSheet.create({
  calendarContainer: {
    height: 360,
    overflow: 'hidden',
  },
  headerContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginHorizontal: 15,
  },
  headerUserIconContainer: {
    position: 'absolute',
    top: 10,
    left: 15,
  },
  headerText: {
    color: calendarHeaderTextColor,
    fontSize: 16,
    fontWeight: '300',
  },
});

export default styles;
