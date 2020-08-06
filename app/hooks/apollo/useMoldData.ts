import { getMoldDataAsync } from '../../config/store/main';
import { GET_TODO_MOLDS } from './utils/graphql';
import useImperativeQueryThunk from '../common/useImperativeQueryThunk';

function useMoldData() {
  const refetch = useImperativeQueryThunk({
    query: GET_TODO_MOLDS,
    options: {
      variables: { dateString: '' },
    },
    action: getMoldDataAsync,
  });
  const getTodoMolds = refetch('getTodoMolds');
  return getTodoMolds;
}

export default useMoldData;
