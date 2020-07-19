import { StyleSheet, Dimensions } from 'react-native';
import { inputBorderColor, inputTitleColor } from '../../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: inputBorderColor,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 5,
  },
  inputTitle: {
    marginBottom: 6,
    fontWeight: '400',
    fontSize: 13,
    color: inputTitleColor,
  },
  textInputContainer: {
    width: width * 0.7,
    fontSize: 16,
  },
});

export default styles;
