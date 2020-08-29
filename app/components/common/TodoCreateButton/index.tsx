import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function TodoCreateButton({ onPress }: { onPress: any }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View>
        <Text style={{ fontSize: 12 }}>추가하기</Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(TodoCreateButton);
