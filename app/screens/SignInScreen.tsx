// Modules
import React from 'react';
import { Button } from 'react-native';
// Utils
import { CustomStackScreenProp } from './types';
// Components
import Input from '../components/common/Input';
// Hooks
import useInput from '../hooks/common/useInput';
import useSignIn from '../hooks/auth/useSignIn';
import CustomSafeAreaView from './CustomSafeAreaView';

function SignInScreen({ navigation }: CustomStackScreenProp<'SignIn'>) {
  const { hardenForm, onChangeText } = useInput();
  const { username, password } = hardenForm.auth;
  const signInQuery = useSignIn();
  const signIn = () => {
    if (username && password) {
      return signInQuery({ variables: { username, password } });
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
      <Button title="Sign In" onPress={signIn} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </CustomSafeAreaView>
  );
}

export default React.memo(SignInScreen);
