import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import FloatingPanelWrapper from '../components/common/FloatingPanelWrapper';
import { CustomStackScreenProp } from './types';
import Header from '../components/common/Header';
import ContinuousAchievement from '../components/mold/ContinuousAchievement';
import InfoBox from '../components/mold/InfoBox';
import ProgressInfo from '../components/mold/ProgressInfo';
import Input from '../components/common/Input';
import useSelectWeekdays from '../hooks/common/useSelectWeekdays';
import ListOfWeekday from '../components/main/ListOfWeekday';
import useResetWeekdays from '../hooks/floatingPanel/useResetWeekdays';
import useDetailSetter from '../hooks/floatingPanel/useDetailSetter';
import useInput from '../hooks/common/useInput';
import TodoManager from '../components/main/TodoManager';
import useTogglePanel from '../hooks/floatingPanel/useTogglePanel';

function MoldScreen({
  navigation,
  route: {
    params: { data },
  },
}: CustomStackScreenProp<'Mold'>) {
  useDetailSetter(data.id);
  const { setSelectedWeekdays } = useSelectWeekdays();
  const { setIsPanelActive } = useTogglePanel('mold');
  const { hardenForm, onChangeText, resetInput } = useInput();
  const { todo } = hardenForm;
  const resetSelectedWeekdays = useResetWeekdays();
  useEffect(() => {
    setSelectedWeekdays(data.dayNameToRepeat);
    onChangeText('todo', 'title')(data.title);
    onChangeText('todo', 'startDate')(data.startDate);
    onChangeText('todo', 'startTime')(data.startTime);
    onChangeText('todo', 'endTime')(data.endTime);
    onChangeText('todo', 'endDate')(data.endDate);
    onChangeText('todo', 'weekDifference')(String(data.weekDifference));
    onChangeText('todo', 'dateDifference')(String(data.dateDifference));
    onChangeText(
      'todo',
      'amountChangeInterval',
    )(String(data.amountChangeInterval));
    onChangeText('todo', 'amountDifference')(String(data.amountDifference));
    return () => {
      resetSelectedWeekdays();
      resetInput();
    };
  }, []);
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
          {data.method === 'weekdays' && (
            <>
              <ListOfWeekday title="반복되는 요일" disabled={true} />
              <Input
                title="Week Difference"
                value={todo.weekDifference}
                disabled={true}
              />
            </>
          )}
          {data.method === 'dateDifference' && (
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
      <TodoManager type="detail" onPress={() => setIsPanelActive(true)} />
    </FloatingPanelWrapper>
  );
}

export default MoldScreen;
