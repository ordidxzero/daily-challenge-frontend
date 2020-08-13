import { useDispatch } from 'react-redux';
import { selectDetail } from '../../config/store/main';
import { useEffect } from 'react';

function useDetailSetter(id: string) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectDetail(id));
  }, []);
}

export default useDetailSetter;
