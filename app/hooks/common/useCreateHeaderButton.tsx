import React from 'react';
import useSelectDay from './useSelectDay';
import { Button, Alert } from 'react-native';
import useReduxState from './useReduxState';
import useDeleteTodo from '../apollo/useDeleteTodo';
function useCreateHeaderButton(navigation: any) {
  const {
    main: { selectedTodo },
  } = useReduxState();
  const { deleteTodoBack, deleteTodoFront } = useDeleteTodo();
  const { selectedDay } = useSelectDay();
  if (selectedTodo) {
    const onPress = () => {
      Alert.alert(
        'Delete',
        'Really?',
        [
          {
            text: 'Yes',
            onPress: () => {
              deleteTodoBack(selectedTodo);
              deleteTodoFront({ dateString: selectedDay, id: selectedTodo });
              navigation.goBack();
            },
          },
          {
            text: 'No',
          },
        ],
        { cancelable: false },
      );
    };
    const headerRight = () => <Button onPress={onPress} title="Delete" />;
    return headerRight;
  } else {
    const headerRight = () => (
      <Button
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
}

export default useCreateHeaderButton;
