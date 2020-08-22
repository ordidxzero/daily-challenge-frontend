import React from 'react';
import AchievementLayout from './AchievementLayout';
import { View, Text, Dimensions } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

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
        width: width - 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: '#dcdde1',
        borderTopColor: '#dcdde1',
        paddingVertical: 20,
        marginVertical: 15,
      }}>
      <AchievementLayout data={currentContinuousAchievement}>
        <SimpleLineIcons
          name="fire"
          size={24}
          color="#3498db"
          style={{ marginRight: 5 }}
        />
        <Text>현재 연속 달성</Text>
      </AchievementLayout>
      <View style={{ height: 60, backgroundColor: '#dcdde1', width: 1 }}></View>
      <AchievementLayout data={maxContinuousAchievement}>
        <SimpleLineIcons
          name="badge"
          size={24}
          color="#f1c40f"
          style={{ marginRight: 5 }}
        />
        <Text>최고 연속 달성</Text>
      </AchievementLayout>
    </View>
  );
}

export default React.memo(ContinuousAchievement);
