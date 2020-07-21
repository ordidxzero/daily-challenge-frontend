import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  calendarContainer: {
    height: 360,
    overflow: 'hidden',
  },
});

export default styles;
