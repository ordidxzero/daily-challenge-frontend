import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useLazyQuery } from '@apollo/client';
import { SIGN_IN } from './graphql';
import useSetToken from '../common/useSetToken';

/**
 * Hook that create signIn Query function
 */
function useSignIn() {
  // useNavigation Typing 지원 안되는거 해결해야됨.
  const navigation = useNavigation();
  const { setToken } = useSetToken();
  const [signIn] = useLazyQuery(SIGN_IN, {
    onCompleted: ({ signIn: { token, error } }) => {
      if (error) {
        console.log(error);
        return;
      }
      AsyncStorage.setItem('dc_login_token', token);
      setToken(token);
      navigation.navigate('Main');
    },
  });
  return signIn;
}

export default useSignIn;
