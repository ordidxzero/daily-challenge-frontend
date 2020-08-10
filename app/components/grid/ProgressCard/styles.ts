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

export const progressCardStyle = StyleSheet.create({
  container: {
    width: width * 0.85,
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
