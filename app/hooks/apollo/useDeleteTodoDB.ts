import { useMutation } from '@apollo/client';
import { DELETE_TODO } from './utils/graphql';

function useDeleteTodoDB() {
  const [deleteTodoMutation] = useMutation(DELETE_TODO);
  return (id: string) => deleteTodoMutation({ variables: { id } });
}

export default useDeleteTodoDB;
