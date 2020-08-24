// Modules
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
// Hooks
import useMoldData from '../hooks/apollo/useMoldData';
// Components
import ProgressCard from '../components/grid/ProgressCard';
// Utils
import styles from './styles';
import Header from '../components/common/Header';

function GridScreen() {
  const { data } = useMoldData();
  return (
    <SafeAreaView
      style={[styles.safeAreaViewContainer, { justifyContent: 'flex-start' }]}>
      <Header title="Grid" />
      <ScrollView
        bounces={false}
        style={styles.gridScrollView}
        contentContainerStyle={styles.gridContentStyleProp}>
        {data && data.map(item => <ProgressCard key={item.id} data={item} />)}
      </ScrollView>
    </SafeAreaView>
  );
}

export default React.memo(GridScreen);
