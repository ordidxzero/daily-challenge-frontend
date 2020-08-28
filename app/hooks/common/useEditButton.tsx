import React from 'react';
import { Button, Alert } from 'react-native';
import useReduxState from './useReduxState';
import useEditTodoMold from '../apollo/useEditTodoMold';
import useInput from './useInput';

function useEditButton(navigation: any) {
  const {
    main: { detail },
  } = useReduxState();
  const {
    hardenForm: { todo },
  } = useInput();
  const { startDate, title } = todo;
  const editTodoMold = useEditTodoMold();
  if (detail) {
    const onPress = () => editTodoMold(detail).then(() => navigation.goBack());
    const headerRight = () => <Button onPress={onPress} title="완료" />;
    return headerRight;
  }
  const headerRight = () => (
    <Button
      disabled={title === '' || startDate === ''}
      onPress={() =>
        Alert.alert('Error', 'You sholud escape this screen.', [
          {
            text: 'Yes',
            onPress: () => navigation.goBack(),
          },
        ])
      }
      title="Error"
    />
  );
  return headerRight;
}

export default useEditButton;
