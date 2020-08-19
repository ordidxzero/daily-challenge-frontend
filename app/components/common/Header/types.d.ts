import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../screens/types';

export type ScreenHeaderProps = {
  type: 'todo' | 'mold';
  navigation: StackNavigationProp<RootStackParamList, 'Todo' | 'Mold'>;
};
