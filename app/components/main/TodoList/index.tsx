// Modules
import React, { useMemo, useCallback, useRef } from 'react';
import { Dimensions, FlatList } from 'react-native';
// Components
import DayComponent from './DayComponent';
// Hooks
import useTodoData from '../../../hooks/todoList/useTodoData';
import useScroll from '../../../hooks/todoList/useScroll';
import useSelectDay from '../../../hooks/common/useSelectDay';
// Utils
import { ViewableItemsType } from './types';

const { width } = Dimensions.get('window');

function TodoList() {
  const flatList = useRef<FlatList>(null);
  const { onScroll, resetExecutable, isScroll, setIsScroll } = useScroll();
  const { setSelectedDay } = useSelectDay();
  const { data, onRightEndReached, onLeftEndReached } = useTodoData(
    isScroll,
    flatList,
  );
  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: ViewableItemsType) => {
      if (viewableItems[0]) {
        setSelectedDay(viewableItems[0].key);
      }
    },
    [],
  );
  const viewabilityConfig = useMemo(
    () => ({ viewAreaCoveragePercentThreshold: 50, minimumViewTime: 300 }),
    [],
  );

  return (
    <FlatList
      ref={flatList}
      style={{ width, flex: 1 }}
      data={data}
      renderItem={({ item }) => <DayComponent {...item} />}
      keyExtractor={item => item.dateString}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      windowSize={5}
      initialScrollIndex={3}
      initialNumToRender={5}
      scrollEventThrottle={16}
      onScroll={onScroll(data.length, onLeftEndReached, onRightEndReached)}
      onScrollBeginDrag={() => {
        resetExecutable();
        setIsScroll(true);
      }}
      onMomentumScrollEnd={() => setIsScroll(false)}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      getItemLayout={(_, index) => ({
        length: width,
        offset: width * index,
        index,
      })}
    />
  );
}

export default React.memo(TodoList);
