import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { CloseProps } from './types';
import useInput from '../../../hooks/common/useInput';
import {
  floatingPanelCloseDarkModeBackgroundColor,
  floatingPanelCloseDefaultBackgroundColor,
} from '../../../config/styles';
import useReduxState from '../../../hooks/common/useReduxState';

const Close = ({
  onPress,
  rootStyle,
  iconStyle,
  renderButton: CustomClose,
}: CloseProps) => {
  const {
    hardenForm: { todo },
  } = useInput();
  const {
    main: { darkMode },
  } = useReduxState();
  const { startDate, title } = todo;
  const dark = darkModeStyle(darkMode);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      disabled={startDate === '' || title === ''}
      style={[
        CloseStyles.defaultButton,
        !CustomClose && dark.closeButton,
        !CustomClose && CloseStyles.closeButton,
        rootStyle,
      ]}>
      {CustomClose ? (
        <CustomClose disabled={startDate === '' || title === ''} />
      ) : (
        <>
          <View
            style={[
              CloseStyles.iconLine,
              iconStyle,
              { transform: [{ rotateZ: '45deg' }] },
            ]}
          />
          <View
            style={[
              CloseStyles.iconLine,
              iconStyle,
              { transform: [{ rotateZ: '135deg' }] },
            ]}
          />
        </>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(Close);

const CloseStyles = StyleSheet.create({
  defaultButton: {
    position: 'absolute',
    right: 12,
    top: 12,
    zIndex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  iconLine: {
    position: 'absolute',
    width: 18,
    height: 2,
    borderRadius: 2,
    backgroundColor: 'white',
  },
});

const darkModeStyle = (darkMode: boolean) =>
  StyleSheet.create({
    closeButton: {
      backgroundColor: darkMode
        ? floatingPanelCloseDarkModeBackgroundColor
        : floatingPanelCloseDefaultBackgroundColor,
    },
  });
