import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { CustomStackScreenProp } from './types';
import styles from './styles';

function TodoScreen({
  route: {
    params: { data },
  },
}: CustomStackScreenProp<'Todo'>) {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Text>{data.title}</Text>
    </SafeAreaView>
  );
}

export default TodoScreen;
