import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useLazyQuery } from '@apollo/client';
import { SIGN_IN } from './graphql';
import useLoginToken from '../common/useLoginToken';

/**
 * Hook that create signIn Query function
 */
function useSignIn() {
  // useNavigation Typing 지원 안되는거 해결해야됨.
  const navigation = useNavigation();
  const { setToken } = useLoginToken();
  const [signInQuery, { loading }] = useLazyQuery(SIGN_IN, {
    onCompleted: ({ signIn: { token, error } }) => {
      if (error) {
        console.log(error);
        return;
      }
      AsyncStorage.setItem('dc_login_token', token);
      setToken(token);
      return navigation.navigate('Main');
    },
  });
  return { signInQuery, loading };
}

export default useSignIn;
