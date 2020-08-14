// Modules
import React, { useLayoutEffect } from 'react';
import { View, Animated } from 'react-native';

// Hooks
import useInput from '../../../../hooks/common/useInput';
import useFoldAnimation from '../../../../hooks/floatingPanel/useFoldAnimation';
import useRadioState from '../../../../hooks/floatingPanel/useRadioState';

// Components
import Input from '../../Input';
import InputSection from '../InputSection';
import Radio from '../../Radio';
import ListOfWeekday from '../../../main/ListOfWeekday';
import { MoldDataType } from '../../../../@types';

function MoldPanelContent({ data }: { data: MoldDataType }) {
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
  const { hardenForm, onChangeText } = useInput();
  const { todo } = hardenForm;

  useLayoutEffect(() => {
    setIsRepeat(data.isRepeat ? 'yes' : 'no')();
    setMethod(data.method)();
  }, []);

  useLayoutEffect(() => {
    onChangeText('todo', 'isRepeat')(isRepeat.current);
  }, [isRepeat.current]);

  useLayoutEffect(() => {
    onChangeText('todo', 'method')(selectMethod.current);
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
        {!data && (
          <>
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
          </>
        )}
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
    </View>
  );
}

export default React.memo(MoldPanelContent);
