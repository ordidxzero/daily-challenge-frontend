import React from 'react';
import { Button, Alert } from 'react-native';
import useTodoMoldAdder from '../apollo/useTodoMoldAdder';

function useCreateButton(navigation: any) {
  const createTodoMold = useTodoMoldAdder();
  const onPress = () => {
    Alert.alert(
      'Create',
      'Really?',
      [
        {
          text: 'Yes',
          onPress: async () => createTodoMold().then(() => navigation.goBack()),
        },
        {
          text: 'No',
        },
      ],
      { cancelable: false },
    );
  };
  const headerRight = () => <Button onPress={onPress} title="생성" />;
  return headerRight;
}

export default useCreateButton;
