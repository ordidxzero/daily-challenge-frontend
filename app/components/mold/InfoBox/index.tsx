import React from 'react';
import dayjs from 'dayjs';
import { View, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

function InfoBox({
  title,
  startDate,
  endDate,
}: {
  title: string;
  startDate: string;
  endDate: string;
}) {
  const getDiff = () => Math.ceil(-dayjs().diff(endDate, 'hour') / 24);
  return (
    <View
      style={{
        position: 'relative',
        width,
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdde1',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 35,
        marginBottom: 35,
      }}>
      <Text style={{ fontSize: 20 }}>{title}</Text>
      <View
        style={{
          position: 'absolute',
          top: 63,
          width: width * 0.7,
          height: 70,
          backgroundColor: '#2c3e50',
          borderRadius: 7,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
          }}>
          <Text style={{ color: '#fff' }}>{startDate}</Text>
          <Text style={{ color: '#fff' }}>~</Text>
          <Text style={{ color: '#fff' }}>{endDate}</Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomLeftRadius: 7,
            borderBottomRightRadius: 7,
          }}>
          <Text style={{ fontSize: 30, color: 'white' }}>D - </Text>
          <Text style={{ fontSize: 30, color: 'white' }}>{getDiff()}</Text>
        </View>
      </View>
    </View>
  );
}

export default React.memo(InfoBox);