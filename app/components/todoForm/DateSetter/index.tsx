import React from 'react';
import { View, Dimensions } from 'react-native';
import DateSetInput from './DateSetInput';
import { dateSetterContainerBorderColor } from '../../../config/styles';

const { width } = Dimensions.get('window');

function DateSetter({ type }: { type: 'create' | 'edit' }) {
  return (
    <View
      style={{
        width: width - 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: dateSetterContainerBorderColor,
        paddingBottom: 18,
        marginBottom: 15,
      }}>
      <DateSetInput
        type="startDate"
        title={type === 'create' ? '시작 날짜' : '수정 적용 날짜'}
      />
      <View
        style={{
          height: 60,
          backgroundColor: dateSetterContainerBorderColor,
          width: 1,
        }}></View>
      <DateSetInput type="endDate" title="마지막 날짜" />
    </View>
  );
}

export default React.memo(DateSetter);
