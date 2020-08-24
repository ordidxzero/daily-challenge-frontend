// Modules
import React, { useEffect } from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';
// Utils
import { CustomStackScreenProp } from './types';
import styles from './styles';
// Hooks
import useSelectWeekdays from '../hooks/common/useSelectWeekdays';
import useDetailSetter from '../hooks/floatingPanel/useDetailSetter';
import useInput from '../hooks/common/useInput';
import useUnmountReset from '../hooks/common/useUnmountReset';
// Components
import Header from '../components/common/Header';
import Input from '../components/common/Input';
import ContinuousAchievement from '../components/mold/ContinuousAchievement';
import InfoBox from '../components/mold/InfoBox';
import ProgressInfo from '../components/mold/ProgressInfo';
import ListOfWeekday from '../components/main/ListOfWeekday';

function MoldScreen({
  route: {
    params: { data },
  },
}: CustomStackScreenProp<'Mold'>) {
  useDetailSetter(data.id);
  useUnmountReset();
  const { setSelectedWeekdays } = useSelectWeekdays();
  const { onChangeText, hardenForm } = useInput();
  const { todo } = hardenForm;

  useEffect(() => {
    setSelectedWeekdays(data.dayNameToRepeat);
    onChangeText('todo', 'title')(data.title);
    onChangeText('todo', 'startDate')(data.startDate);
    onChangeText('todo', 'endDate')(data.endDate);
    onChangeText('todo', 'startTime')(data.startTime);
    onChangeText('todo', 'endTime')(data.endTime);
    onChangeText('todo', 'unit')(data.unit);
    onChangeText('todo', 'isRepeat')(data.isRepeat);
    onChangeText('todo', 'method')(data.method);
    onChangeText('todo', 'weekDifference')(data.weekDifference);
    onChangeText('todo', 'dateDifference')(data.dateDifference);
    onChangeText('todo', 'amountChangeInterval')(data.amountChangeInterval);
    onChangeText('todo', 'amountDifference')(data.amountDifference);
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Header type="mold" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <InfoBox
          title={todo.title}
          startDate={data.startDate}
          endDate={todo.endDate}
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
          {todo.method === 'weekdays' && (
            <>
              <ListOfWeekday title="반복되는 요일" disabled={true} />
              <Input
                title="Week Difference"
                value={todo.weekDifference}
                disabled={true}
              />
            </>
          )}
          {todo.method === 'dateDifference' && (
            <Input
              title="Date Difference"
              value={todo.dateDifference}
              disabled={true}
            />
          )}
          <Input
            title="Amount Change Interval"
            value={todo.amountChangeInterval}
            disabled={true}
          />
          <Input
            title="Amount Difference"
            value={todo.amountDifference}
            disabled={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MoldScreen;
