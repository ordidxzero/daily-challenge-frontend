import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import ProgressBar from './ProgressBar';

const { width } = Dimensions.get('window');

function ProgressCard({
  title,
  progressRate,
  completionRate,
}: {
  title: string;
  progressRate: number;
  completionRate: number;
}) {
  return (
    <View
      style={{
        width: width * 0.8,
        paddingHorizontal: 7,
        paddingVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        marginBottom: 10,
      }}>
      <Text>{title}</Text>
      <ProgressBar data={progressRate} />
      <ProgressBar data={completionRate} />
    </View>
  );
}

export default ProgressCard;
