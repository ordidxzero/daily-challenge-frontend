import React from 'react';
import { SafeAreaView, Animated } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import Header from '../components/common/Header';
import Input from '../components/common/Input';
import useInput from '../hooks/common/useInput';
import useSelectDay from '../hooks/common/useSelectDay';
import InputSection from '../components/common/FloatingPanelWrapper/InputSection';
import Radio from '../components/common/Radio';
import ListOfWeekday from '../components/main/ListOfWeekday';
import useRadioState from '../hooks/floatingPanel/useRadioState';
import useFoldAnimation from '../hooks/floatingPanel/useFoldAnimation';
import DateSetter from '../components/create/DateSetter';

function CreateScreen() {
  const [isRepeat, setIsRepeat] = useRadioState({
    current: 'no',
    data: [
      { key: 'yes', label: 'yes' },
      { key: 'no', label: 'no' },
    ],
  });
  const [selectMethod, setMethod] = useRadioState({
    current: 'weekdays',
    data: [
      { key: 'weekdays', label: '요일' },
      { key: 'dateDifference', label: '날짜 간격' },
    ],
  });
  const animation = useFoldAnimation(isRepeat.current === 'yes');
  const { selectedDay } = useSelectDay();
  const { hardenForm, onChangeText } = useInput();
  const { todo } = hardenForm;
  return (
    <SafeAreaView
      style={[styles.safeAreaViewContainer, { justifyContent: 'flex-start' }]}>
      <Header title="할 일 생성하기" type="create" />
      <KeyboardAwareScrollView
        style={{ padding: 10 }}
        showsVerticalScrollIndicator={false}>
        <InputSection title="BASIC INFOMATION">
          <Input
            title="날짜"
            placeholder={selectedDay}
            value={selectedDay}
            onChangeText={onChangeText('todo', 'startDate')}
            disabled={true}
          />
          <Input
            title="제목"
            placeholder="푸쉬업"
            value={todo.title}
            onChangeText={onChangeText('todo', 'title')}
          />
          <Input
            title="목표량"
            placeholder="5"
            value={todo.amount}
            onChangeText={onChangeText('todo', 'amount')}
          />
          <Input
            title="단위"
            placeholder="개"
            value={todo.unit}
            onChangeText={onChangeText('todo', 'unit')}
          />
          <Input
            title="시작 시간"
            placeholder="09:00"
            value={todo.startTime}
            onChangeText={onChangeText('todo', 'startTime')}
          />
          <Input
            title="마감 시간"
            placeholder="10:00"
            value={todo.endTime}
            onChangeText={onChangeText('todo', 'endTime')}
          />
        </InputSection>
        <Radio {...isRepeat} onPress={setIsRepeat} title="반복하시겠습니까?" />
        <Animated.View
          style={{
            height: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 600],
              extrapolate: 'clamp',
            }),
            overflow: 'hidden',
          }}>
          <InputSection title="ADVANCED INFOMATION">
            <DateSetter />
            <Radio
              {...selectMethod}
              onPress={setMethod}
              type="rect"
              title="생성방식"
            />
            {selectMethod.current === 'weekdays' && (
              <>
                <ListOfWeekday title="무슨 요일마다 반복할 지?" />
                <Input
                  title="몇 주 마다 반복할 지?"
                  placeholder="1"
                  value={todo.weekDifference}
                  onChangeText={onChangeText('todo', 'weekDifference')}
                />
              </>
            )}
            {selectMethod.current === 'dateDifference' && (
              <Input
                title="며칠마다 반복할 지?"
                placeholder="1"
                value={todo.dateDifference}
                onChangeText={onChangeText('todo', 'dateDifference')}
              />
            )}
            <Input
              title="amount를 며칠마다 증가시킬 지?"
              placeholder="1"
              value={todo.amountChangeInterval}
              onChangeText={onChangeText('todo', 'amountChangeInterval')}
            />
            <Input
              title="amount를 몇 개씩 증가시킬 지?"
              placeholder="5"
              value={todo.amountDifference}
              onChangeText={onChangeText('todo', 'amountDifference')}
            />
          </InputSection>
        </Animated.View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default CreateScreen;
