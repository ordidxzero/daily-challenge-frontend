import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../screens/types';

export type TodoScreenHeaderProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Todo'>;
};
