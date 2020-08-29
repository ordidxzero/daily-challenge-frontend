import React from 'react';
import { Button } from 'react-native';
import useTodoMoldAdder from '../apollo/useTodoMoldAdder';
import useInput from './useInput';

function useCreateButton(navigation: any) {
  const {
    hardenForm: { todo },
  } = useInput();
  const { startDate, title } = todo;
  const createTodoMold = useTodoMoldAdder();
  const onPress = () => createTodoMold().then(() => navigation.goBack());
  const headerRight = () => (
    <Button
      disabled={title === '' || startDate === ''}
      onPress={onPress}
      title="생성"
    />
  );
  return headerRight;
}

export default useCreateButton;
