// Modules
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
// Hooks
import useMoldData from '../hooks/apollo/useMoldData';
// Components
import ProgressCard from '../components/grid/ProgressCard';
// Utils
import { styles } from './styles';
import CustomSafeAreaView from './CustomSafeAreaView';

function GridScreen() {
  const { data, loading } = useMoldData();
  return (
    <CustomSafeAreaView headerTitle="Grid">
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.gridContentStyleProp}>
        {loading ? (
          <View>
            <Text>Skeleton</Text>
          </View>
        ) : (
          data.map(item => <ProgressCard key={item.id} data={item} />)
        )}
      </ScrollView>
    </CustomSafeAreaView>
  );
}

export default React.memo(GridScreen);
