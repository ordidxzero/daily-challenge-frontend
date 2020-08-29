import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { styles, darkModeStyle } from './styles';
import useReduxState from '../../../hooks/common/useReduxState';

function Header({ month }: { month: string }) {
  const {
    main: { darkMode },
  } = useReduxState();
  const dark = darkModeStyle(darkMode);
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.headerUserIconContainer}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <SimpleLineIcons name="user" size={22} style={dark.headerIcon} />
      </TouchableOpacity>
      <Text style={[styles.headerText, dark.headerText]}>{month}</Text>
    </View>
  );
}

export default React.memo(Header);
