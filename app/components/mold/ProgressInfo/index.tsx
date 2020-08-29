import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import ProgressBar from '../../common/ProgressBar';
import { progressInfoContainerBorderColor } from '../../../config/styles';

const { width } = Dimensions.get('window');

function ProgressInfo({
  progressRate,
  completionRate,
}: {
  progressRate: number;
  completionRate: number;
}) {
  return (
    <View
      style={{
        width: width - 50,
        borderBottomColor: progressInfoContainerBorderColor,
        borderBottomWidth: 1,
        marginTop: 10,
        marginBottom: 20,
      }}>
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
