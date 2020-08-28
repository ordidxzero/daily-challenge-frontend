import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { CloseProps } from './types';
import useInput from '../../../hooks/common/useInput';

const Close = ({ onPress, rootStyle, iconStyle, renderButton }: CloseProps) => {
  const {
    hardenForm: { todo },
  } = useInput();
  const { startDate, title } = todo;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      disabled={startDate === '' || title === ''}
      style={[
        CloseStyles.defaultButton,
        !renderButton && CloseStyles.closeButton,
        rootStyle,
      ]}>
      {renderButton ? (
        renderButton()
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
    backgroundColor: '#e2e2e2',
  },
  iconLine: {
    position: 'absolute',
    width: 18,
    height: 2,
    borderRadius: 2,
    backgroundColor: 'white',
  },
});
