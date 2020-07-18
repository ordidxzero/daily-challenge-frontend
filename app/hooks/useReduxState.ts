import { useSelector } from 'react-redux';
import { RootState } from '../config/store';

function useReduxState() {
  return useSelector((state: RootState) => state);
}

export default useReduxState;
