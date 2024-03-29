import { useEffect } from 'react';
import dayjs from 'dayjs';
import { GET_TODO_MOLDS } from './utils/graphql';
import useImperativeQueryThunk from '../common/useImperativeQueryThunk';
import useReduxState from '../common/useReduxState';
import { GetTodoMoldsInput } from './utils/type';

function useMoldData() {
  const {
    main: { molds },
  } = useReduxState();

  const [getTodoMolds, loading] = useImperativeQueryThunk<GetTodoMoldsInput>({
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
  return { data: molds, loading };
}

export default useMoldData;
