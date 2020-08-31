import React from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import { styles, darkModeStyle } from './styles';
import Header from '../components/common/ScreenHeader';
import useReduxState from '../hooks/common/useReduxState';

function CustomSafeAreaView({
  children,
  showScreenHeader = true,
  headerTitle,
  headerType,
  style = {},
}: {
  children: React.ReactNode;
  headerType?: 'todo' | 'mold' | 'create' | 'edit';
  showScreenHeader?: boolean;
  headerTitle?: string;
  style?: StyleProp<ViewStyle>;
}) {
  const {
    main: { darkMode },
  } = useReduxState();
  const dark = darkModeStyle(darkMode);
  return (
    <>
      {showScreenHeader && (
        <SafeAreaView style={[{ flex: 0 }, dark.safeAreaViewStatusBar]} />
      )}
      <SafeAreaView
        style={[
          styles.safeAreaViewContainer,
          style,
          dark.safeAreaViewContainer,
        ]}>
        {showScreenHeader && <Header type={headerType} title={headerTitle} />}
        {children}
      </SafeAreaView>
    </>
  );
}

export default CustomSafeAreaView;
