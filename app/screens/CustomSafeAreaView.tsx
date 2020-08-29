import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles, darkModeStyle } from './styles';
import Header from '../components/common/ScreenHeader';
import useReduxState from '../hooks/common/useReduxState';

function CustomSafeAreaView({
  children,
  showScreenHeader = true,
  headerTitle,
  headerType,
}: {
  children: React.ReactNode;
  headerType?: 'todo' | 'mold' | 'create' | 'edit';
  showScreenHeader?: boolean;
  headerTitle?: string;
}) {
  const {
    main: { darkMode },
  } = useReduxState();
  const dark = darkModeStyle(darkMode);
  return (
    <SafeAreaView
      style={[styles.safeAreaViewContainer, dark.safeAreaViewContainer]}>
      {showScreenHeader && <Header type={headerType} title={headerTitle} />}
      {children}
    </SafeAreaView>
  );
}

export default CustomSafeAreaView;
