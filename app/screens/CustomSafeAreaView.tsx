import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import Header from '../components/common/ScreenHeader';

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
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      {showScreenHeader && <Header type={headerType} title={headerTitle} />}
      {children}
    </SafeAreaView>
  );
}

export default CustomSafeAreaView;
