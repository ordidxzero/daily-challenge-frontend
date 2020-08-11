import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TodoScreenHeaderProps } from './types';
import { Entypo } from '@expo/vector-icons';
import useCreateHeaderButton from '../../hooks/common/useCreateHeaderButton';
import styles from './styles';

function Header({ navigation }: TodoScreenHeaderProps) {
  const headerRight = useCreateHeaderButton(navigation);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Entypo name="chevron-left" size={30} color="#0984e3" />
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.titleText}>세부 사항</Text>
      </View>
      {headerRight()}
    </View>
  );
}

export default Header;
