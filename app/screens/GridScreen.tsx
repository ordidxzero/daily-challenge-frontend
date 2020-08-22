// Modules
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
// Hooks
import useMoldData from '../hooks/apollo/useMoldData';
// Components
import ProgressCard from '../components/grid/ProgressCard';
// Utils
import styles from './styles';

function GridScreen() {
  const { data } = useMoldData();
  return (
    <SafeAreaView
      style={[styles.safeAreaViewContainer, { justifyContent: 'flex-start' }]}>
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
