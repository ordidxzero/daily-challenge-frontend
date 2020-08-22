import { StyleSheet, Dimensions } from 'react-native';
import {
  circleDefaultColor,
  yesRadioButtonColor,
  noRadioButtonColor,
} from '../../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  radioContainer: {
    width: width - 50,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    overflow: 'hidden',
  },
  radioTitle: {
    fontSize: 15,
    marginBottom: 15,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: circleDefaultColor,
  },
  touchableOpacityLabel: { fontSize: 15, textTransform: 'capitalize' },
  selectedCircle: { backgroundColor: circleDefaultColor },
  selectedLabel: { color: 'white' },
  yes: {
    borderColor: yesRadioButtonColor,
    backgroundColor: yesRadioButtonColor,
  },
  no: {
    borderColor: noRadioButtonColor,
    backgroundColor: noRadioButtonColor,
  },
});

export default styles;
