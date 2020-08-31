import React from 'react';
import { Button, Alert } from 'react-native';
import useReduxState from './useReduxState';
import useEditTodoMold from '../apollo/useEditTodoMold';
import useInput from './useInput';
import useTodoMoldAdder from '../apollo/useTodoMoldAdder';

function useEditButton(type: 'edit' | 'create', navigation: any) {
  const {
    main: { detail },
  } = useReduxState();
  const {
    hardenForm: { todo },
  } = useInput();
  const { startDate, title } = todo;
  const { createTodoMold } = useTodoMoldAdder();
  const { editTodoMold } = useEditTodoMold();
  const buttonTitle = type === 'create' ? '생성' : detail ? '완료' : 'Error';
  const disabled =
    type === 'edit' && !detail ? false : startDate === '' || title === '';
  let onPress: () => any;
  if (type === 'create') {
    onPress = () => createTodoMold().then(() => navigation.goBack());
  }
  if (type === 'edit' && detail) {
    onPress = () => editTodoMold(detail).then(() => navigation.goBack());
  }
  if (type === 'edit' && !detail) {
    onPress = () =>
      Alert.alert('Error', 'Cannot find detail id...', [
        {
          text: 'Yes',
          onPress: () => navigation.goBack(),
        },
      ]);
  }
  const headerRight = () => (
    <Button disabled={disabled} onPress={onPress} title={buttonTitle} />
  );
  return headerRight;
}

export default useEditButton;
