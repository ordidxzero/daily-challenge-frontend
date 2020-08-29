import { StyleSheet, Dimensions } from 'react-native';
import {
  inputBorderColor,
  inputTitleColor,
  inputRequireWarnColor,
} from '../../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    borderWidth: 1,
    borderColor: inputBorderColor,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 5,
    marginBottom: 20,
  },
  requiredInputContainer: {
    borderColor: inputRequireWarnColor,
  },
  inputTitle: {
    marginBottom: 10,
    letterSpacing: 1,
    fontWeight: '400',
    fontSize: 13,
    color: inputTitleColor,
  },
  textInputContainer: {
    width: width * 0.75,
    fontSize: 16,
  },
});

export default styles;
