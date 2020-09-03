// Modules
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
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
  const { createAccount, loading } = useCreateAccount();
  const { username, password, startDayTime, endDayTime } = hardenForm.auth;
  const signUp = () =>
    createAccount().then(() => navigation.navigate('SignIn'));
  return (
    <CustomSafeAreaView
      showScreenHeader={false}
      style={{ justifyContent: 'center' }}>
      <KeyboardAvoidingView behavior="padding">
        <Input
          title="Username"
          placeholder="ID"
          onChangeText={onChangeText('auth', 'username')}
          value={username}
          required
        />
        <Input
          title="Password"
          placeholder="PW"
          onChangeText={onChangeText('auth', 'password')}
          secureTextEntry={true}
          value={password}
          required
        />
        <Input
          title="하루의 시작"
          placeholder="08:00"
          onChangeText={onChangeText('auth', 'startDayTime')}
          value={startDayTime}
        />
        <Input
          title="하루의 끝"
          placeholder="23:00"
          onChangeText={onChangeText('auth', 'endDayTime')}
          value={endDayTime}
        />
        <Button
          mode="outlined"
          loading={loading}
          onPress={signUp}
          style={{ marginBottom: 50 }}
          disabled={!username || !password || loading}>
          Sign Up
        </Button>
        <Button
          mode="outlined"
          disabled={loading}
          onPress={() => navigation.navigate('SignIn')}>
          Sign In
        </Button>
      </KeyboardAvoidingView>
    </CustomSafeAreaView>
  );
}

export default React.memo(SignUpScreen);
