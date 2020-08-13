import React from 'react';
import { ScrollView, View } from 'react-native';
import FloatingPanelWrapper from '../components/common/FloatingPanelWrapper';
import { CustomStackScreenProp } from './types';
import Header from '../components/common/Header';
import ContinuousAchievement from '../components/mold/ContinuousAchievement';
import InfoBox from '../components/mold/InfoBox';
import ProgressInfo from '../components/mold/ProgressInfo';
import Input from '../components/common/Input';

function MoldScreen({
  navigation,
  route: {
    params: { data },
  },
}: CustomStackScreenProp<'Mold'>) {
  return (
    <FloatingPanelWrapper type="mold" data={data}>
      <Header navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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
          <Input title="Title" value="test" disabled={true} />
          <Input title="Start Date" value="test" disabled={true} />
          <Input title="End Date" value="test" disabled={true} />
          <Input title="DayName" value="test" disabled={true} />
          <Input title="Week Difference" value="test" disabled={true} />
          <Input title="Date Difference" value="test" disabled={true} />
          <Input title="Amount Change Interval" value="test" disabled={true} />
          <Input title="Amount Difference" value="test" disabled={true} />
          <Input title="Amount" value="test" disabled={true} />
        </View>
      </ScrollView>
    </FloatingPanelWrapper>
  );
}

export default MoldScreen;
