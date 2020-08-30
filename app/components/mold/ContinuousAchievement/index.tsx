import React from 'react';
import AchievementLayout from './AchievementLayout';
import { View, Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { styles, darkModeStyle } from './styles';
import useReduxState from '../../../hooks/common/useReduxState';

function ContinuousAchievement({
  currentContinuousAchievement,
  maxContinuousAchievement,
}: {
  maxContinuousAchievement: number;
  currentContinuousAchievement: number;
}) {
  const {
    main: { darkMode },
  } = useReduxState();
  const dark = darkModeStyle(darkMode);
  return (
    <View
      style={[
        styles.continuousAchievementContainer,
        dark.continuousAchievementContainer,
      ]}>
      <AchievementLayout data={currentContinuousAchievement}>
        <SimpleLineIcons name="fire" size={24} style={styles.fireIcon} />
        <Text
          style={[
            styles.continuousAchievementTitleText,
            dark.continuousAchievementTitleText,
          ]}>
          현재 연속 달성
        </Text>
      </AchievementLayout>
      <View
        style={[
          styles.continuousAchievementVerticalLine,
          dark.continuousAchievementVerticalLine,
        ]}></View>
      <AchievementLayout data={maxContinuousAchievement}>
        <SimpleLineIcons name="badge" size={24} style={styles.badgeIcon} />
        <Text
          style={[
            styles.continuousAchievementTitleText,
            dark.continuousAchievementTitleText,
          ]}>
          최고 연속 달성
        </Text>
      </AchievementLayout>
    </View>
  );
}

export default React.memo(ContinuousAchievement);
