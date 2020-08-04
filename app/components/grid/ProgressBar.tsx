import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { progressbarColor } from '../../config/styles';

const { width } = Dimensions.get('window');

function ProgressBar({ data }: { data: number }) {
  const percent = data ? (data * 100).toFixed(2) : '0.00';
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          position: 'relative',
          width: width * 0.65,
          height: 5,
          backgroundColor: '#ecf0f1',
          borderRadius: 3,
          marginRight: 5,
          overflow: 'hidden',
        }}>
        <View
          style={{
            width: width * 0.65 * data,
            height: 5,
            backgroundColor: progressbarColor,
            borderRadius: 3,
            marginRight: 5,
          }}></View>
      </View>
      <Text style={{ fontSize: 11 }}>{percent}%</Text>
    </View>
  );
}

export default ProgressBar;
