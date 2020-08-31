import React from 'react';
import { View } from 'react-native';
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
      <ProgressBar title="전체 진행률" rate={progressRate} />
      <ProgressBar title="현재 달성률" rate={completionRate} />
    </View>
  );
}

export default ProgressInfo;
