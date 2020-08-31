import { useMutation } from '@apollo/client';
import { CREATE_ACCOUNT } from './graphql';
import useInput from '../common/useInput';

/**
 * Hook that create createAccount Mutation function
 */
function useCreateAccount() {
  const { hardenForm } = useInput();
  const { username, password, startDayTime, endDayTime } = hardenForm.auth;
  const [createAccountMutation, { loading }] = useMutation(CREATE_ACCOUNT);
  const createAccount = () => {
    return createAccountMutation({
      variables: {
        username,
        password,
        startDayTime: startDayTime || '08:00',
        endDayTime: endDayTime || '23:00',
      },
    });
  };

  return { createAccount, loading };
}

export default useCreateAccount;
