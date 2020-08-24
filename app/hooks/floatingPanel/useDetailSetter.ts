import { useDispatch } from 'react-redux';
import { selectDetail } from '../../config/store/main';
import { useLayoutEffect } from 'react';

function useDetailSetter(id: string) {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(selectDetail(id));
  }, []);
}

export default useDetailSetter;
