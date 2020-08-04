// Modules
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
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
      {data && data.map(item => <ProgressCard key={item.id} data={item} />)}
    </SafeAreaView>
  );
}

export default React.memo(GridScreen);
