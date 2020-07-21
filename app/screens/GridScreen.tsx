// Modules
import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import useMoldData from '../hooks/grid/useMoldData';
import ProgressCard from '../components/grid/ProgressCard';
import dayjs from 'dayjs';

function GridScreen() {
  const data = useMoldData(dayjs().format('YYYY-MM-DD'));
  return (
    <SafeAreaView
      style={[styles.safeAreaViewContainer, { justifyContent: 'flex-start' }]}>
      {data &&
        data.getTodoMolds.data.map((item: any) => (
          <ProgressCard key={item.title} {...item} />
        ))}
    </SafeAreaView>
  );
}

export default React.memo(GridScreen);
