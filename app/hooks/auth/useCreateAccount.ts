import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@apollo/client';
import { CREATE_ACCOUNT } from './graphql';

/**
 * Hook that create createAccount Mutation function
 */
function useCreateAccount() {
  // useNavigation Typing 지원 안되는거 해결해야됨.
  const navigation = useNavigation();
  const [createAccount] = useMutation(CREATE_ACCOUNT, {
    onCompleted: ({ createAccount: { error } }) => {
      if (error) {
        console.log(error);
        return;
      }
      navigation.navigate('SignIn');
    },
  });
  return createAccount;
}

export default useCreateAccount;
