import { StyleSheet } from 'react-native';

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
  headerText: { color: '#2d4150', fontSize: 16, fontWeight: '300' },
});

export default styles;
