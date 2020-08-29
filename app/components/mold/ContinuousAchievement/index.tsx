import React from 'react';
import AchievementLayout from './AchievementLayout';
import { View, Text, Dimensions } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import {
  continuousAchievementContainerBorderColor,
  currentContinuousAchievementIconColor,
  continuousAchievementWarnColor,
  maxContinuousAchievementIconColor,
} from '../../../config/styles';

const { width } = Dimensions.get('window');

function ContinuousAchievement({
  currentContinuousAchievement,
  maxContinuousAchievement,
}: {
  maxContinuousAchievement: number;
  currentContinuousAchievement: number;
}) {
  return (
    <View
      style={{
        position: 'relative',
        width: width - 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: continuousAchievementContainerBorderColor,
        borderTopColor: continuousAchievementContainerBorderColor,
        paddingVertical: 20,
        marginVertical: 15,
      }}>
      <AchievementLayout data={currentContinuousAchievement}>
        <SimpleLineIcons
          name="fire"
          size={24}
          color={currentContinuousAchievementIconColor}
          style={{ marginRight: 5 }}
        />
        <Text style={{ fontSize: 17 }}>현재 연속 달성</Text>
      </AchievementLayout>
      <View
        style={{
          position: 'absolute',
          bottom: 1,
          left: 0,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 12,
            color: continuousAchievementWarnColor,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 20 }}>※</Text>{' '}
          <Text>오늘을 기준으로 집계됩니다.</Text>
        </Text>
      </View>
      <View
        style={{
          height: 60,
          backgroundColor: continuousAchievementContainerBorderColor,
          width: 1,
        }}></View>
      <AchievementLayout data={maxContinuousAchievement}>
        <SimpleLineIcons
          name="badge"
          size={24}
          color={maxContinuousAchievementIconColor}
          style={{ marginRight: 5 }}
        />
        <Text style={{ fontSize: 17 }}>최고 연속 달성</Text>
      </AchievementLayout>
    </View>
  );
}

export default React.memo(ContinuousAchievement);
