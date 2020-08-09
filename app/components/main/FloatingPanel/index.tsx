import React, { useRef } from 'react';
import { StyleSheet, Animated, Dimensions, View, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ifIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';
import Panel from './Panel';

const { width, height } = Dimensions.get('window');

const FULL_HEIGHT = height;
const PANEL_HEIGHT = FULL_HEIGHT - 140;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
});

export default function FloatingPanel({
  containerStyle,
  children,
  panelContent,
  panelHeight,
  ...panelProps
}: {
  panelHeight: number;
  containerStyle?: any;
  children: React.ReactNode;
  panelContent: React.ReactNode;
  isActive: boolean;
} & Omit<FloatingPanelProps, 'pan'>) {
  const animation = useRef(new Animated.ValueXY({ x: 0, y: FULL_HEIGHT }));
  return (
    <View style={[styles.container, containerStyle]}>
      <Animated.View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            overflow: 'hidden',
            width,
            height,
          },
          {
            paddingTop:
              Platform.OS === 'android'
                ? getStatusBarHeight(true)
                : getStatusBarHeight(),
            ...ifIphoneX({ paddingBottom: getBottomSpace() }, {}),
          },
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
        {children}
      </Animated.View>
      <Panel {...panelProps} pan={animation.current} panelHeight={panelHeight}>
        {panelContent}
      </Panel>
    </View>
  );
}
