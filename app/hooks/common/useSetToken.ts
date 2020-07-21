import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { setToken as setTokenAction } from '../../config/store/login';

function useSetToken() {
  const dispatch = useDispatch();
  const setToken = useCallback(
    (token: string | null) => dispatch(setTokenAction(token)),
    [dispatch],
  );
  const checkLogin = async () => {
    try {
      const token = await AsyncStorage.getItem('dc_login_token');
      setToken(token);
    } catch (error) {
      return;
    }
  };
  return { checkLogin, setToken };
}

export default useSetToken;
