// Modules
import React from 'react';
import { Button, SafeAreaView } from 'react-native';
// Utils
import { CustomStackScreenProp } from './types';
import styles from './styles';
// Components
import Input from '../components/common/Input';
// Hooks
import useInput from '../hooks/common/useInput';
import useCreateAccount from '../hooks/auth/useCreateAccount';

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
    <SafeAreaView style={styles.safeAreaViewContainer}>
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
    </SafeAreaView>
  );
}

export default React.memo(SignUpScreen);
