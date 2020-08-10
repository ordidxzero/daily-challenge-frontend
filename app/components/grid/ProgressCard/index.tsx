import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProgressBar from './ProgressBar';
import { progressCardStyle } from './styles';
import { ProgressCardProps } from './types';

function ProgressCard({ data }: ProgressCardProps) {
  return (
    <TouchableOpacity>
      <View style={progressCardStyle.container}>
        <Text>{data.title}</Text>
        <ProgressBar rate={data.progressRate} />
        <ProgressBar rate={data.completionRate} />
      </View>
    </TouchableOpacity>
  );
}

export default ProgressCard;
