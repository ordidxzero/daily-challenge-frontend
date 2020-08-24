import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenHeaderProps } from './types';
import { SimpleLineIcons } from '@expo/vector-icons';
import useDeleteButton from '../../../hooks/common/useDeleteButton';
import useCreateButton from '../../../hooks/common/useCreateButton';
import styles from './styles';

function Header({ type, title = '세부 사항' }: ScreenHeaderProps) {
  const navigation = useNavigation();
  const rightButton =
    type && type !== 'create'
      ? useDeleteButton(type, navigation)
      : type === 'create'
      ? useCreateButton(navigation)
      : null;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <SimpleLineIcons name="arrow-left" size={18} color="black" />
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {rightButton && rightButton()}
    </View>
  );
}

export default Header;
