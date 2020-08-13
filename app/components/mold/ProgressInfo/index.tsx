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
      <View style={{ marginBottom: 20 }}>
        <Text>전체 진행률</Text>
        <ProgressBar rate={progressRate} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>현재 달성률</Text>
        <ProgressBar rate={completionRate} />
      </View>
    </View>
  );
}

export default ProgressInfo;
