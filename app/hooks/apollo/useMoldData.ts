import { useDispatch } from 'react-redux';
import { getMoldDataAsync } from '../../config/store/main';
import { GET_TODO_MOLDS } from './utils/graphql';
import useImperativeQuery from '../common/useImperativeQuery';

function useMoldData() {
  const { request, failure, success } = getMoldDataAsync;
  const dispatch = useDispatch();
  const refetch = useImperativeQuery(GET_TODO_MOLDS, {
    variables: { dateString: '' },
  });
  const getTodoMolds = (variables?: { dateString: string }) => {
    dispatch(request());
    refetch(variables)
      .then(
        ({
          data: {
            getTodoMolds: { data, error },
          },
        }) => {
          if (error) {
            return dispatch(failure(error));
          } else {
            return dispatch(success(data));
          }
        },
      )
      .catch(error => console.log(error));
  };
  return getTodoMolds;
}

export default useMoldData;
