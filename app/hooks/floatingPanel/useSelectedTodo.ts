import { useDispatch } from 'react-redux';
import { selectTodo } from '../../config/store/main';
import { useEffect } from 'react';

function useSelectedTodo(id: string) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectTodo(id));
  }, []);
}

export default useSelectedTodo;
