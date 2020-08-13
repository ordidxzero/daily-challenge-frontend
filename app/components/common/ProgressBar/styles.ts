import { StyleSheet, Dimensions } from 'react-native';
import { progressbarColor } from '../../../config/styles';

const { width } = Dimensions.get('window');

export const progressBarStyle = (data: number) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    bar: {
      position: 'relative',
      width: width * 0.65,
      height: 5,
      backgroundColor: '#ecf0f1',
      borderRadius: 3,
      marginRight: 5,
      overflow: 'hidden',
    },
    barRate: {
      width: width * 0.65 * data,
      height: 5,
      backgroundColor: progressbarColor,
      borderRadius: 3,
      marginRight: 5,
    },
  });
