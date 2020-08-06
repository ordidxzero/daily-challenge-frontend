import { StyleSheet } from 'react-native';
import { inputSectionTitleBorderColor } from '../../../config/styles';

const styles = StyleSheet.create({
  inputSectionTitleContainer: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: inputSectionTitleBorderColor,
    marginBottom: 18,
  },
  inputSectionTitle: {
    fontSize: 18,
    fontWeight: '300',
  },
});

export default styles;
