import React, { useRef } from 'react';
import {
  StyleSheet,
  Animated,
  Dimensions,
  View,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ifIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';
import { FloatingPanelProps, PanelPropsUsingUser } from './types';
import Panel from './Panel';
import useReduxState from '../../../hooks/common/useReduxState';
import {
  floatingPanelDarkModeBackgroundColor,
  floatingPanelDefaultBackgroundColor,
  fakeSafeAreaViewDarkModeBackgroundColor,
} from '../../../config/styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  animatedView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width,
    ...ifIphoneX({ paddingBottom: getBottomSpace() }, {}),
  },
});

const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    fakeSafeAreaView: {
      backgroundColor: darkMode
        ? fakeSafeAreaViewDarkModeBackgroundColor
        : floatingPanelDefaultBackgroundColor,
    },
    animatedView: {
      backgroundColor: darkMode
        ? floatingPanelDarkModeBackgroundColor
        : floatingPanelDefaultBackgroundColor,
    },
  });

function FakeSafeAreaView({ style = {} }: { style?: StyleProp<ViewStyle> }) {
  return (
    <View
      style={[
        {
          width,
          height:
            Platform.OS === 'android'
              ? getStatusBarHeight(true)
              : getStatusBarHeight(),
        },
        style,
      ]}
    />
  );
}

export default function FloatingPanel({
  containerStyle,
  children,
  panelContent,
  panelOutsideHeight,
  ...panelProps
}: FloatingPanelProps) {
  const FULL_HEIGHT = height;
  const PANEL_HEIGHT = FULL_HEIGHT - panelOutsideHeight;
  const animation = useRef(new Animated.ValueXY({ x: 0, y: FULL_HEIGHT }));
  const {
    main: { darkMode },
  } = useReduxState();
  const dark = darkModeStyle(darkMode);
  return (
    <View style={[styles.container]}>
      <Animated.View
        style={[
          styles.animatedView,
          containerStyle,
          dark.animatedView,
          {
            borderRadius: animation.current.y.interpolate({
              inputRange: [0, PANEL_HEIGHT],
              outputRange: [10, 0],
              extrapolate: 'clamp',
            }),
          },
          {
            transform: [
              {
                scale: animation.current.y.interpolate({
                  inputRange: [0, PANEL_HEIGHT],
                  outputRange: [0.9, 1.011],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
        <FakeSafeAreaView style={dark.fakeSafeAreaView} />
        {children}
      </Animated.View>
      <Panel {...panelProps} pan={animation.current} panelHeight={PANEL_HEIGHT}>
        {panelContent}
      </Panel>
    </View>
  );
}

export { PanelPropsUsingUser as PanelProps };
