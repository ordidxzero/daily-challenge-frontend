import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import styles from './styles';

function Header({ month }: { month: string }) {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.headerUserIconContainer}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <SimpleLineIcons name="user" size={22} color="#A0A1A3" />
      </TouchableOpacity>
      <Text style={styles.headerText}>{month}</Text>
    </View>
  );
}

export default React.memo(Header);
