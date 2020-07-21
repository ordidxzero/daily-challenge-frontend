import { useQuery } from '@apollo/client';
import { GET_TODO_MOLDS } from './utils/graphql';

function useMoldData(dateString: string) {
  const { data } = useQuery(GET_TODO_MOLDS, {
    variables: { dateString },
  });
  return data;
}

export default useMoldData;
