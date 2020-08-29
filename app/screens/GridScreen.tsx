// Modules
import React from 'react';
import { ScrollView } from 'react-native';
// Hooks
import useMoldData from '../hooks/apollo/useMoldData';
// Components
import ProgressCard from '../components/grid/ProgressCard';
// Utils
import { styles } from './styles';
import CustomSafeAreaView from './CustomSafeAreaView';

function GridScreen() {
  const { data } = useMoldData();
  return (
    <CustomSafeAreaView headerTitle="Grid">
      <ScrollView contentContainerStyle={styles.gridContentStyleProp}>
        {data && data.map(item => <ProgressCard key={item.id} data={item} />)}
      </ScrollView>
    </CustomSafeAreaView>
  );
}

export default React.memo(GridScreen);
