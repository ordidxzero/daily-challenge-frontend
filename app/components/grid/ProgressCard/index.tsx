import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '../../common/ProgressBar';
import { progressCardStyle } from './styles';
import { ProgressCardProps } from './types';

function ProgressCard({ data }: ProgressCardProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Mold', { data })}>
      <View style={progressCardStyle.container}>
        <Text>{data.title}</Text>
        <ProgressBar rate={data.progressRate} />
        <ProgressBar rate={data.completionRate} />
      </View>
    </TouchableOpacity>
  );
}

export default ProgressCard;
