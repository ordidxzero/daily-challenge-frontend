import React from 'react';
import useSelectDay from '../common/useSelectDay';
import { Button, Alert } from 'react-native';
import useReduxState from '../common/useReduxState';
import useDeleteTodo from './useDeleteTodo';
import useDeleteTodoDB from '../apollo/useDeleteTodoDB';
function useCreateHeaderButton() {
  const {
    main: { selectedTodo },
  } = useReduxState();
  const deleteTodoMutation = useDeleteTodoDB();
  const { selectedDay } = useSelectDay();
  const deleteTodo = useDeleteTodo();
  if (selectedTodo) {
    const onPress = (navigation: any) => () => {
      Alert.alert(
        'Delete',
        'Really?',
        [
          {
            text: 'Yes',
            onPress: () => {
              deleteTodoMutation(selectedTodo);
              deleteTodo({ dateString: selectedDay, id: selectedTodo });
              navigation.navigate('Main');
            },
          },
          {
            text: 'No',
          },
        ],
        { cancelable: false },
      );
    };
    const headerRight = (navigation: any) => () => (
      <Button onPress={onPress(navigation)} title="Delete" />
    );
    return headerRight;
  }
}

export default useCreateHeaderButton;
