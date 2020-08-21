import { RequestType } from '../../@types';
import useReduxState from './useReduxState';

function useLoadingState(type: RequestType) {
  const {
    main: { loading },
  } = useReduxState();
  return loading[type];
}

export default useLoadingState;
