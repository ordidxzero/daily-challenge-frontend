import React, { useCallback } from 'react';
import { View } from 'react-native';
import TodoManager from '../TodoManager';
import useTogglePanel from '../../../hooks/floatingPanel/useTogglePanel';
import useTodoMoldAdder from '../../../hooks/apollo/useTodoMoldAdder';

function CustomBottomTabBar() {
  const { setIsPanelActive, isPanelActive } = useTogglePanel();
  const createTodoMold = useTodoMoldAdder();
  const openPanel = useCallback(() => setIsPanelActive(true), []);
  const closePanel = useCallback(() => {
    createTodoMold()
      .then(() => setIsPanelActive(false))
      .catch(error => console.log(error));
  }, [createTodoMold]);

  return (
    <View>
      <TodoManager onPress={isPanelActive ? closePanel : openPanel} />
    </View>
  );
}

export default React.memo(CustomBottomTabBar);
