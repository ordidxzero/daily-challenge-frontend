import React, { useEffect } from 'react';
import { View, Animated } from 'react-native';
import Input from '../../../common/Input';
import InputSection from './InputSection';
import useInput from '../../../../hooks/common/useInput';
import Radio from '../../../common/Radio';
import useFoldAnimation from '../../../../hooks/swipeablePanel/useFoldAnimation';
import useRadioState from '../../../../hooks/swipeablePanel/useRadioState';
import ListOfWeekday from '../../ListOfWeekday';
import useResetState from '../../../../hooks/swipeablePanel/useResetState';

function PanelContent() {
  const { radioState: isRepeat, setter: setIsRepeat } = useRadioState({
    current: 'no',
    data: ['yes', 'no'],
  });
  const { radioState: selectMethod, setter: setMethod } = useRadioState({
    current: 'weekdays',
    data: ['weekdays', 'dateDifference'],
  });
  const animation = useFoldAnimation(isRepeat.current === 'yes');
  const resetReduxState = useResetState();
  const { hardenForm, onChangeText } = useInput();
  const { todo } = hardenForm;

  useEffect(() => {
    return () => {
      resetReduxState();
    };
  }, []);

  useEffect(() => {
    onChangeText('todo', 'dateDifference')('');
    onChangeText('todo', 'weekDifference')('');
    resetReduxState();
  }, [selectMethod.current]);

  return (
    <View style={{ alignItems: 'center', marginTop: 15 }}>
      <InputSection title="BASIC INFOMATION">
        <Input
          title="Start Date"
          disabled={true}
          value={todo.startDate}
          onChangeText={onChangeText('todo', 'startDate')}
        />
        <Input
          title="Title"
          placeholder="푸쉬업"
          value={todo.title}
          onChangeText={onChangeText('todo', 'title')}
        />
        <Input
          title="Amount"
          placeholder="5"
          value={todo.amount}
          onChangeText={onChangeText('todo', 'amount')}
        />
        <Input
          title="Unit"
          placeholder="개"
          value={todo.unit}
          onChangeText={onChangeText('todo', 'unit')}
        />
        <Input
          title="Start Time"
          placeholder="09:00"
          value={todo.startTime}
          onChangeText={onChangeText('todo', 'startTime')}
        />
        <Input
          title="End Time"
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
            outputRange: [0, 660],
            extrapolate: 'clamp',
          }),
          overflow: 'hidden',
        }}>
        <InputSection title="ADVANCED INFOMATION">
          <Input
            title="언제까지 반복하시겠습니까?"
            placeholder={todo.startDate}
            value={todo.endDate}
            onChangeText={onChangeText('todo', 'endDate')}
          />
          <Radio {...selectMethod} onPress={setMethod} title="생성방식" />
          {selectMethod.current === 'weekdays' && (
            <>
              <ListOfWeekday />
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
    </View>
  );
}

export default React.memo(PanelContent);
