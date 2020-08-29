import React, { useState } from 'react';
import { Image, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { SimpleLineIcons } from '@expo/vector-icons';
import useLoginToken from './hooks/common/useLoginToken';
import DrawerNavigation from './navigations/DrawerNavigation';
import useReduxState from './hooks/common/useReduxState';

const cacheImages = (images: any[]) =>
  images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts: any[]) => fonts.map(font => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const {
    main: { isPanelActive, darkMode },
  } = useReduxState();
  const { checkLogin } = useLoginToken();
  const loadAssets = async () => {
    const images = cacheImages([
      'https://images.unsplash.com/photo-1589128833250-cba8f5b6a923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
      require('./assets/splash.png'),
    ]);
    const fonts = cacheFonts([SimpleLineIcons.font]);
    const token = checkLogin();
    await Promise.all([...images, ...fonts, token]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
      <StatusBar
        barStyle={
          Platform.OS === 'android' || isPanelActive || darkMode
            ? 'light-content'
            : 'dark-content'
        }
      />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
