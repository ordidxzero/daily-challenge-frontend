import { useEffect, useCallback } from 'react';
import { FlatList, Dimensions } from 'react-native';
import useGetTodos from '../apollo/useGetTodos';
import useReduxState from '../common/useReduxState';
import { generateRange } from './utils/tools';

const { width } = Dimensions.get('window');

// AROUND_RANGE_END 변경시 TodoList.tsx의 FlatList의 initialScrollIndex props도 변경해야됨
const AROUND_RANGE_END = 3;
const AROUND_RANGE_START = -AROUND_RANGE_END;
const BIDIRECTIONAL_BOUNDARY = 2 * (AROUND_RANGE_END + 1);

const BEFORE = generateRange(-BIDIRECTIONAL_BOUNDARY, -2);
const AROUND = generateRange(AROUND_RANGE_START, AROUND_RANGE_END);
const AFTER = generateRange(2, BIDIRECTIONAL_BOUNDARY);

const INITIAL_FLAT_LIST_INDEX = AROUND_RANGE_END;
const INDEX_OF_FLAT_LIST_EXTENDED_LEFT = BEFORE.length + 1;

function useTodoData(
  isScroll: boolean,
  flatList: React.RefObject<FlatList<any>>,
) {
  const [getAroundTodos, around] = useGetTodos('around');
  const [getBeforeTodos, before] = useGetTodos('before');
  const [getAfterTodos, after] = useGetTodos('after');
  const {
    main: { selectedDay, agendas },
  } = useReduxState();
  const onRightEndReached = useCallback(() => {
    if (isScroll) {
      getAfterTodos({ dateString: selectedDay, position: AFTER });
    }
  }, [isScroll, selectedDay]);
  const onLeftEndReached = useCallback(() => {
    getBeforeTodos({ dateString: selectedDay, position: BEFORE });
    flatList.current?.scrollToOffset({
      offset: width * INDEX_OF_FLAT_LIST_EXTENDED_LEFT,
      animated: false,
    });
  }, [selectedDay]);

  useEffect(() => {
    if (agendas.findIndex(agenda => agenda.dateString === selectedDay) !== -1) {
      if (!isScroll) {
        const index = agendas.findIndex(
          agenda => agenda.dateString === selectedDay,
        );
        flatList.current?.scrollToOffset({
          offset: width * index,
          animated: false,
        });
      }
    } else {
      getAroundTodos({ dateString: selectedDay, position: AROUND });
      flatList.current?.scrollToOffset({
        offset: width * INITIAL_FLAT_LIST_INDEX,
        animated: false,
      });
    }
  }, [selectedDay]);
  return {
    onRightEndReached,
    onLeftEndReached,
    agendas,
    loading: { before, around, after },
  };
}

export default useTodoData;
