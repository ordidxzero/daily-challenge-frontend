import React from 'react';
import useSelectDay from './useSelectDay';
import { Button, Alert } from 'react-native';
import useReduxState from './useReduxState';
import useDeleteTodo from '../apollo/useDeleteTodo';
function useCreateHeaderButton() {
  const {
    main: { selectedTodo },
  } = useReduxState();
  const { deleteTodoBack, deleteTodoFront } = useDeleteTodo();
  const { selectedDay } = useSelectDay();
  if (selectedTodo) {
    const onPress = (navigation: any) => () => {
      Alert.alert(
        'Delete',
        'Really?',
        [
          {
            text: 'Yes',
            onPress: () => {
              deleteTodoBack(selectedTodo);
              deleteTodoFront({ dateString: selectedDay, id: selectedTodo });
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
