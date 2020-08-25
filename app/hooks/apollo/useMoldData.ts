import { useEffect } from 'react';
import dayjs from 'dayjs';
import { GET_TODO_MOLDS } from './utils/graphql';
import useImperativeQueryThunk from '../common/useImperativeQueryThunk';
import useReduxState from '../common/useReduxState';
import { GetTodoMoldsData, GetTodoMoldsInput } from './utils/type';

function useMoldData() {
  const {
    main: {
      molds,
      loading: { mold },
    },
  } = useReduxState();

  const getTodoMolds = useImperativeQueryThunk<
    GetTodoMoldsData,
    GetTodoMoldsInput
  >({
    query: GET_TODO_MOLDS,
    options: {
      variables: { dateString: '' },
    },
    type: 'mold',
  });

  useEffect(
    () => getTodoMolds({ dateString: dayjs().format('YYYY-MM-DD') }),
    [],
  );
  return { data: molds, loading: mold };
}

export default useMoldData;
