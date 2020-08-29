// Modules
import React from 'react';
// Components
import Calendar from '../components/main/Calendar';
import TodoCreateButton from '../components/common/TodoCreateButton';
import { CustomStackScreenProp } from './types';
import CustomSafeAreaView from './CustomSafeAreaView';

function MainScreen({ navigation }: CustomStackScreenProp<'Main'>) {
  return (
    <CustomSafeAreaView showScreenHeader={false}>
      <Calendar />
      <TodoCreateButton
        onPress={() => navigation.navigate('TodoForm', { type: 'create' })}
      />
    </CustomSafeAreaView>
  );
}

export default React.memo(MainScreen);
