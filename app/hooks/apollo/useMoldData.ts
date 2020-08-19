import { useEffect } from 'react';
import dayjs from 'dayjs';
import { GET_TODO_MOLDS } from './utils/graphql';
import useImperativeQueryThunk from '../common/useImperativeQueryThunk';
import useReduxState from '../common/useReduxState';

function useMoldData() {
  const {
    main: { molds },
  } = useReduxState();

  const getTodoMolds = useImperativeQueryThunk({
    query: GET_TODO_MOLDS,
    options: {
      variables: { dateString: '' },
    },
    type: 'moldData',
  });

  useEffect(
    () => getTodoMolds({ dateString: dayjs().format('YYYY-MM-DD') }),
    [],
  );
  return molds;
}

export default useMoldData;
