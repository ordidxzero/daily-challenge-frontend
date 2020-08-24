import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenHeaderProps } from './types';
import { SimpleLineIcons } from '@expo/vector-icons';
import styles from './styles';
import useRightButton from '../../../hooks/common/useRightButton';
import useCreateButton from '../../../hooks/common/useCreateButton';
import useEditButton from '../../../hooks/common/useEditButton';

function Header({ type, title = '세부 사항' }: ScreenHeaderProps) {
  const navigation = useNavigation();
  const rightButton =
    (type === 'todo' || type === 'mold') && useRightButton(type, navigation);
  const createButton = type === 'create' && useCreateButton(navigation);
  const editButton = type === 'edit' && useEditButton(navigation);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <SimpleLineIcons name="arrow-left" size={18} color="black" />
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {rightButton && rightButton()}
      {createButton && createButton()}
      {editButton && editButton()}
    </View>
  );
}

export default Header;
