import React from 'react';
import { View, Text } from 'react-native';
import ProgressBar from '../../common/ProgressBar';

function ProgressInfo({
  progressRate,
  completionRate,
}: {
  progressRate: number;
  completionRate: number;
}) {
  return (
    <View>
      <Text>todo 진행률</Text>
      <ProgressBar rate={progressRate} />
      <Text>todo 달성률</Text>
      <ProgressBar rate={completionRate} />
    </View>
  );
}

export default ProgressInfo;
