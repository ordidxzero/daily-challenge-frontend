import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { setToken as setTokenAction } from '../../config/store/login';

function useLoginToken() {
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

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('dc_login_token');
      setToken(null);
    } catch (error) {
      return;
    }
  };
  return { checkLogin, setToken, logout };
}

export default useLoginToken;
