import React from 'react';
import { View } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

function DrawerContent(
  props: DrawerContentComponentProps<DrawerContentOptions>,
) {
  const { navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity onPress={() => navigation.navigate('Grid')}>
          <Drawer.Item icon="format-list-checkbox" label="Grid" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Drawer.Item icon="settings" label="Settings" />
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
}

export default DrawerContent;
