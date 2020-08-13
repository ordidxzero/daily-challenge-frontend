import React from 'react';
import { View } from 'react-native';
import FloatingPanelWrapper from '../components/common/FloatingPanelWrapper';
import { CustomStackScreenProp } from './types';
import Header from '../components/common/Header';
import ContinuousAchievement from '../components/mold/ContinuousAchievement';
import InfoBox from '../components/mold/InfoBox';
import ProgressInfo from '../components/mold/ProgressInfo';

function MoldScreen({
  navigation,
  route: {
    params: { data },
  },
}: CustomStackScreenProp<'Mold'>) {
  return (
    <FloatingPanelWrapper
      type="mold"
      data={data}
      containerStyle={{
        justifyContent: 'flex-start',
      }}>
      <Header navigation={navigation} />
      <InfoBox
        title={data.title}
        startDate={data.startDate}
        endDate={data.endDate}
      />
      <View>
        <ContinuousAchievement
          currentContinuousAchievement={data.currentContinuousAchievement}
          maxContinuousAchievement={data.maxContinuousAchievement}
        />
        <ProgressInfo
          progressRate={data.progressRate}
          completionRate={data.completionRate}
        />
      </View>
    </FloatingPanelWrapper>
  );
}

export default MoldScreen;
