import { StyleSheet, Dimensions } from 'react-native';
import {
  deleteButtonDefaultBackgroundColor,
  deleteButtonBorderColor,
  deleteButtonScreenBackgroundColor,
} from '../../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  default: {
    width: width * 0.75 + 14,
    height: 35,
    marginTop: 35,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: deleteButtonDefaultBackgroundColor,
  },
  screen: {
    width,
    height: 40,
    marginTop: 0,
    borderRadius: 0,
    borderTopColor: deleteButtonBorderColor,
    borderTopWidth: 3,
    backgroundColor: deleteButtonScreenBackgroundColor,
  },
});

export default styles;
