// Modules
import React from 'react';
import { Button } from 'react-native';
// Utils
import { CustomStackScreenProp } from './types';
// Components
import Input from '../components/common/Input';
// Hooks
import useInput from '../hooks/common/useInput';
import useCreateAccount from '../hooks/auth/useCreateAccount';
import CustomSafeAreaView from './CustomSafeAreaView';

function SignUpScreen({ navigation }: CustomStackScreenProp<'SignUp'>) {
  const { hardenForm, onChangeText } = useInput();
  const createAccountMutation = useCreateAccount();
  const { username, password } = hardenForm.auth;
  const createAccount = () => {
    if (username && password) {
      return createAccountMutation({ variables: { username, password } });
    }
  };
  return (
    <CustomSafeAreaView showScreenHeader={false}>
      <Input
        title="Username"
        placeholder="ID"
        onChangeText={onChangeText('auth', 'username')}
        value={username}
      />
      <Input
        title="Password"
        placeholder="PW"
        onChangeText={onChangeText('auth', 'password')}
        secureTextEntry={true}
        value={password}
      />
      <Button title="Sign Up" onPress={createAccount} />
      <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
    </CustomSafeAreaView>
  );
}

export default React.memo(SignUpScreen);
