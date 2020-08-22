// Modules
import React from 'react';
import { SafeAreaView } from 'react-native';
// Components
import Calendar from '../components/main/Calendar';
import styles from './styles';
import TodoCreateButton from '../components/common/TodoCreateButton';
import { CustomStackScreenProp } from './types';

function MainScreen({ navigation }: CustomStackScreenProp<'Main'>) {
  return (
    <SafeAreaView
      style={[styles.safeAreaViewContainer, { position: 'relative' }]}>
      <Calendar />
      <TodoCreateButton onPress={() => navigation.navigate('Create')} />
    </SafeAreaView>
  );
}

export default React.memo(MainScreen);
