// Modules
import React from 'react';
import { Button } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';
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
  const { signInQuery, loading } = useSignIn();
  const signIn = () => signInQuery({ variables: { username, password } });
  return (
    <CustomSafeAreaView
      showScreenHeader={false}
      style={{ justifyContent: 'center' }}>
      <KeyboardAvoidingView>
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
        <Button
          mode="outlined"
          loading={loading}
          onPress={signIn}
          style={{ marginBottom: 20 }}
          disabled={!username || !password || loading}>
          Sign In
        </Button>
        <Button
          mode="outlined"
          disabled={loading}
          onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Button>
      </KeyboardAvoidingView>
    </CustomSafeAreaView>
  );
}

export default React.memo(SignInScreen);
