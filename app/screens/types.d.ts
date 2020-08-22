import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { MoldDataType, TodoDataType } from '../@types';

// ------------------ Stack Navigation Types -----------------

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Main: undefined;
  Todo: { data: TodoDataType };
  Mold: { data: MoldDataType };
  Grid: undefined;
  Create: undefined;
};

export type CustomStackScreenProp<
  RouteName extends keyof RootStackParamList
> = {
  route: RouteProp<RootStackParamList, RouteName>;
  navigation: StackNavigationProp<RootStackParamList, RouteName>;
};

// 아래처럼 짧게 가능
export type StackProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;

// -----------------------------------------------------------
