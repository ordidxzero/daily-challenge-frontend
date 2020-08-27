import React from 'react';
import { View } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ifIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';
import useLoginToken from '../hooks/common/useLoginToken';

function DrawerContent(
  props: DrawerContentComponentProps<DrawerContentOptions>,
) {
  const { navigation } = props;
  const { logout } = useLoginToken();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity onPress={() => navigation.navigate('Grid')}>
          <Drawer.Item icon="format-list-checkbox" label="Grid" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <Drawer.Item icon="settings" label="Settings" />
        </TouchableOpacity>
      </DrawerContentScrollView>
      <Drawer.Section
        style={{ ...ifIphoneX({ marginBottom: getBottomSpace() }, {}) }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={async () => {
            await logout();
            navigation.navigate('SignIn');
          }}>
          <Drawer.Item icon="exit-to-app" label="Log Out" />
        </TouchableOpacity>
      </Drawer.Section>
    </View>
  );
}

export default DrawerContent;
