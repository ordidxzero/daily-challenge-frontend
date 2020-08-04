// Modules
import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import useMoldData from '../hooks/apollo/useMoldData';
import ProgressCard from '../components/grid/ProgressCard';
import dayjs from 'dayjs';
import useReduxState from '../hooks/common/useReduxState';

function GridScreen() {
  const {
    main: {
      moldData: { data },
    },
  } = useReduxState();
  const getTodoMolds = useMoldData();
  useEffect(
    () => getTodoMolds({ dateString: dayjs().format('YYYY-MM-DD') }),
    [],
  );
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
