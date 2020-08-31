import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { TOGGLE_DARK_MODE, GET_DARK_MODE } from './utils/graphql';
import {
  toggleDarkMode as toggleDarkModeAction,
  failureGetData,
} from '../../config/store/main';
import {
  ToggleDarkModeInput,
  ToggleDarkModeData,
  GetDarkModeData,
} from './utils/type';
import useReduxState from '../common/useReduxState';
import useImperativeQuery from '../common/useImperativeQuery';

function useToggleDarkMode() {
  const {
    main: { darkMode },
  } = useReduxState();
  const getDarkModeQuery = useImperativeQuery<GetDarkModeData>(GET_DARK_MODE);
  const [toggleDarkModeMutation, { loading }] = useMutation<
    ToggleDarkModeData,
    ToggleDarkModeInput
  >(TOGGLE_DARK_MODE);
  const dispatch = useDispatch();

  const setDarkMode = (darkMode: boolean) =>
    dispatch(toggleDarkModeAction(darkMode));

  const toggleDarkMode = async () =>
    toggleDarkModeMutation({
      variables: { darkMode: !darkMode },
    })
      .then(() => setDarkMode(!darkMode))
      .catch(error =>
        dispatch(failureGetData({ type: 'toggleDarkMode', error })),
      );

  const getDarkMode = async () => {
    const darkMode = await getDarkModeQuery();
    if (darkMode.data?.getDarkMode.darkMode) {
      setDarkMode(darkMode.data.getDarkMode.darkMode);
    } else {
      setDarkMode(false);
    }
  };

  return { toggleDarkMode, darkMode, getDarkMode, loading };
}

export default useToggleDarkMode;
