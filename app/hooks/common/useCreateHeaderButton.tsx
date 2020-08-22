import React from 'react';
import useSelectDay from './useSelectDay';
import { Button, Alert } from 'react-native';
import useReduxState from './useReduxState';
import useDeleteTodo from '../apollo/useDeleteTodo';
import useDeleteTodoMold from '../apollo/useDeleteTodoMold';
function useCreateHeaderButton(
  type: 'todo' | 'mold' | 'create',
  navigation: any,
) {
  const {
    main: { detail },
  } = useReduxState();
  const deleteTodo = useDeleteTodo();
  const deleteTodoMold = useDeleteTodoMold();
  const { selectedDay } = useSelectDay();
  if (detail) {
    const onPress = () => {
      Alert.alert(
        'Delete',
        'Really?',
        [
          {
            text: 'Yes',
            onPress: () => {
              if (type === 'todo') {
                return deleteTodo({
                  dateString: selectedDay,
                  id: detail,
                }).then(() => navigation.goBack());
              }
              return deleteTodoMold(detail).then(() => navigation.goBack());
            },
          },
          {
            text: 'No',
          },
        ],
        { cancelable: false },
      );
    };
    const headerRight = () => <Button onPress={onPress} title="삭제" />;
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
