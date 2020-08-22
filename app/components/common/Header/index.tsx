import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenHeaderProps } from './types';
import { SimpleLineIcons } from '@expo/vector-icons';
import useCreateHeaderButton from '../../../hooks/common/useCreateHeaderButton';
import styles from './styles';

function Header({ type, title = '세부 사항' }: ScreenHeaderProps) {
  const navigation = useNavigation();
  const headerRight = useCreateHeaderButton(type, navigation);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <SimpleLineIcons name="arrow-left" size={18} color="black" />
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {type !== 'create' && headerRight()}
    </View>
  );
}

export default Header;
