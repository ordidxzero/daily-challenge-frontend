import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import ProgressBar from './ProgressBar';
import { MoldDataType } from '../../@types';

const { width } = Dimensions.get('window');

function ProgressCard({ data }: { data: MoldDataType }) {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: width * 0.85,
          height: 60,
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#fff',
          marginBottom: 20,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 5,
            height: 4,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5.46,

          elevation: 9,
        }}>
        <Text>{data.title}</Text>
        <ProgressBar data={data.progressRate} />
        <ProgressBar data={data.completionRate} />
      </View>
    </TouchableOpacity>
  );
}

export default ProgressCard;
