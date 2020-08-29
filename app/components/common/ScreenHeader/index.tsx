import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenHeaderProps } from './types';
import { SimpleLineIcons } from '@expo/vector-icons';
import { styles, darkModeStyle } from './styles';
import useRightButton from '../../../hooks/common/useRightButton';
import useFinishButton from '../../../hooks/common/useFinishButton';
import useReduxState from '../../../hooks/common/useReduxState';

function ScreenHeader({ type, title = '세부 사항' }: ScreenHeaderProps) {
  const {
    main: { darkMode },
  } = useReduxState();
  const dark = darkModeStyle(darkMode);
  const navigation = useNavigation();
  const rightButton =
    (type === 'todo' || type === 'mold') && useRightButton(type, navigation);
  const finishButton =
    (type === 'edit' || type === 'create') && useFinishButton(type, navigation);
  return (
    <View style={[styles.container, dark.container]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <SimpleLineIcons name="arrow-left" size={18} style={dark.headerIcon} />
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={[styles.titleText, dark.titleText]}>{title}</Text>
      </View>
      {rightButton && rightButton()}
      {finishButton && finishButton()}
    </View>
  );
}

export default React.memo(ScreenHeader);
