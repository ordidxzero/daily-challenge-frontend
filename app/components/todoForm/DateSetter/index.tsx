import React from 'react';
import { View } from 'react-native';
import DateSetInput from './DateSetInput';
import { styles, darkModeStyle } from './styles';
import useReduxState from '../../../hooks/common/useReduxState';

function DateSetter({ type }: { type: 'create' | 'edit' }) {
  const {
    main: { darkMode },
  } = useReduxState();
  const dark = darkModeStyle(darkMode);
  return (
    <View style={[styles.dateSetterContainer, dark.dateSetterContainer]}>
      <DateSetInput
        type="startDate"
        title={type === 'create' ? '시작 날짜' : '수정 적용 날짜'}
      />
      <View
        style={[
          styles.dateSetterVerticalLine,
          dark.dateSetterVerticalLine,
        ]}></View>
      <DateSetInput type="endDate" title="마지막 날짜" />
    </View>
  );
}

export default React.memo(DateSetter);
