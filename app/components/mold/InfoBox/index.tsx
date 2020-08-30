import React from 'react';
import dayjs from 'dayjs';
import { View, Text } from 'react-native';
import { styles, darkModeStyle } from './styles';
import { InfoBoxProps } from './type';
import useReduxState from '../../../hooks/common/useReduxState';
import DateBoxText from './DateBoxText';

function InfoBox({ title, startDate, endDate }: InfoBoxProps) {
  const {
    main: { darkMode },
  } = useReduxState();
  const getDiff = () => Math.ceil(-dayjs().diff(endDate, 'hour') / 24);
  const dark = darkModeStyle(darkMode);
  return (
    <View style={[styles.infoBoxContainer, dark.infoBoxContainer]}>
      <Text style={[{ fontSize: 20 }, darkMode && { color: 'white' }]}>
        {title}
      </Text>
      <View style={[styles.dateBoxContainer, dark.dateBoxContainer]}>
        <View style={styles.dateBoxDateWrapper}>
          <DateBoxText text={startDate} />
          <DateBoxText text="~" />
          <DateBoxText text={endDate} />
        </View>
        <View style={styles.dateBoxDateDiffWrapper}>
          <DateBoxText text="D - " fontSize={30} />
          <DateBoxText text={getDiff()} fontSize={30} />
        </View>
      </View>
    </View>
  );
}

export default React.memo(InfoBox);
