import { StyleSheet, Dimensions } from 'react-native';
import {
  screenHeaderDefaultBackgroundColor,
  screenHeaderBottomBorderColor,
} from '../../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width,
    height: 45,
    backgroundColor: screenHeaderDefaultBackgroundColor,
    borderBottomColor: screenHeaderBottomBorderColor,
    borderBottomWidth: 0.7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100000,
  },
  title: {
    width,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  titleText: { fontSize: 16, fontWeight: '700' },
});

export default styles;
