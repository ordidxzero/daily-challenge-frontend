import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { RadioButtonProps } from './types';
import styles from './styles';

const typeProperty = (label: string, selected: boolean) => {
  const type: { [key: string]: any } = {
    yes: styles.yes,
    no: styles.no,
  };
  return {
    borderColor: type[label].borderColor,
    backgroundColor: selected ? type[label].backgroundColor : 'white',
  };
};

function RadioButton({ label, selected, onPress }: RadioButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.circle,
          selected && styles.selectedCircle,
          typeProperty(label, selected),
        ]}>
        <Text
          style={[
            styles.touchableOpacityLabel,
            selected && styles.selectedLabel,
          ]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(RadioButton);
