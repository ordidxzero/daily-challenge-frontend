import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../screens/types';

export type ScreenHeaderProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Todo' | 'Mold'>;
};
