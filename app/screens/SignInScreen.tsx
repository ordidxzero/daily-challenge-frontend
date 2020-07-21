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
import useSignIn from '../hooks/auth/useSignIn';

function SignInScreen({ navigation }: CustomStackScreenProp<'SignIn'>) {
  const { form, onChangeText } = useInput();
  const { username, password } = form.auth;
  const signInQuery = useSignIn();
  const signIn = () => {
    if (username && password) {
      return signInQuery({ variables: { username, password } });
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
        value={password}
      />
      <Button title="Sign In" onPress={signIn} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </SafeAreaView>
  );
}

export default React.memo(SignInScreen);
