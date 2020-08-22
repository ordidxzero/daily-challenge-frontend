import React from 'react';
import { View, Dimensions } from 'react-native';
import DateSetInput from './DateSetInput';

const { width } = Dimensions.get('window');

function DateSetter() {
  return (
    <View
      style={{
        width: width - 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dcdde1',
        paddingBottom: 18,
        marginBottom: 15,
      }}>
      <DateSetInput type="startDate" />
      <View style={{ height: 60, backgroundColor: '#dcdde1', width: 1 }}></View>
      <DateSetInput type="endDate" />
    </View>
  );
}

export default DateSetter;
