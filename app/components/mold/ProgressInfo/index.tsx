import React from 'react';
import { View, Text } from 'react-native';
import ProgressBar from '../../common/ProgressBar';
import { styles, darkModeStyle } from './styles';
import useReduxState from '../../../hooks/common/useReduxState';

function ProgressInfo({
  progressRate,
  completionRate,
}: {
  progressRate: number;
  completionRate: number;
}) {
  const {
    main: { darkMode },
  } = useReduxState();
  const dark = darkModeStyle(darkMode);
  return (
    <View style={[styles.progressInfoContainer, dark.progressInfoContainer]}>
      <View style={{ marginBottom: 20 }}>
        <Text>전체 진행률</Text>
        <ProgressBar rate={progressRate} />
      </View>
      <View style={{ marginBottom: 30 }}>
        <Text>현재 달성률</Text>
        <ProgressBar rate={completionRate} />
      </View>
    </View>
  );
}

export default ProgressInfo;
