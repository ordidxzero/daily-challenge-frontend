import { useEffect } from 'react';
import dayjs from 'dayjs';
import { getMoldDataAsync } from '../../config/store/main';
import { GET_TODO_MOLDS } from './utils/graphql';
import useImperativeQueryThunk from '../common/useImperativeQueryThunk';
import useReduxState from '../common/useReduxState';

function useMoldData() {
  const {
    main: {
      moldData: { data },
    },
  } = useReduxState();

  const refetch = useImperativeQueryThunk({
    query: GET_TODO_MOLDS,
    options: {
      variables: { dateString: '' },
    },
    action: getMoldDataAsync,
  });

  const getTodoMolds = refetch('getTodoMolds');

  useEffect(
    () => getTodoMolds({ dateString: dayjs().format('YYYY-MM-DD') }),
    [],
  );
  return data;
}

export default useMoldData;
