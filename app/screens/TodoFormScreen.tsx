// Modules
import React, { useEffect, useRef } from 'react';
import { SafeAreaView, Animated, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// Utils
import styles from './styles';
import { CustomStackScreenProp } from './types';
// Hooks
import useInput from '../hooks/common/useInput';
import useSelectDay from '../hooks/common/useSelectDay';
import useRadioState from '../hooks/floatingPanel/useRadioState';
import useFoldAnimation from '../hooks/floatingPanel/useFoldAnimation';
import useUnmountReset from '../hooks/common/useUnmountReset';
import useReduxState from '../hooks/common/useReduxState';
import useDeleteTodoMold from '../hooks/apollo/useDeleteTodoMold';
// Components
import Header from '../components/common/Header';
import Input from '../components/common/Input';
import InputSection from '../components/common/FloatingPanelWrapper/InputSection';
import Radio from '../components/common/Radio';
import ListOfWeekday from '../components/main/ListOfWeekday';
import DateSetter from '../components/create/DateSetter';
import DeleteButton from '../components/common/DeleteButton';

function TodoFormScreen({
  navigation,
  route: {
    params: { type },
  },
}: CustomStackScreenProp<'TodoForm'>) {
  useUnmountReset(type === 'create');
  const {
    main: { detail },
  } = useReduxState();
  const [isRepeat, setIsRepeat] = useRadioState({
    current: 'no',
    data: [
      { key: 'yes', label: 'yes' },
      { key: 'no', label: 'no' },
    ],
  });
  const [method, setMethod] = useRadioState({
    current: 'weekdays',
    data: [
      { key: 'weekdays', label: '요일' },
      { key: 'dateDifference', label: '날짜 간격' },
    ],
  });
  const scrollView = useRef<KeyboardAwareScrollView>(null);
  const animation = useFoldAnimation(isRepeat.current === 'yes');
  const { selectedDay } = useSelectDay();
  const { hardenForm, onChangeText } = useInput();
  const { todo } = hardenForm;
  const deleteTodoMold = useDeleteTodoMold();
  const onDeleteButtonPress = () =>
    detail && deleteTodoMold(detail).then(() => navigation.navigate('Grid'));
  useEffect(() => {
    if (type === 'edit') {
      setIsRepeat(todo.isRepeat ? 'yes' : 'no')();
      setMethod(todo.method)();
    }
  }, []);
  useEffect(() => {
    if (isRepeat.current === 'yes') {
      setTimeout(() => scrollView.current?.scrollToEnd(), 300);
    }
    onChangeText('todo', 'isRepeat')(isRepeat.current === 'yes');
    onChangeText('todo', 'method')(method.current);
  }, [isRepeat.current, method.current]);
  return (
    <SafeAreaView
      style={[styles.safeAreaViewContainer, { justifyContent: 'flex-start' }]}>
      <Header
        title={type === 'create' ? '할 일 생성하기' : '수정하기'}
        type={type}
      />
      <KeyboardAwareScrollView
        style={{ padding: 10 }}
        onScrollBeginDrag={() => Keyboard.dismiss()}
        ref={scrollView}
        showsVerticalScrollIndicator={false}>
        <InputSection title="BASIC INFOMATION">
          {/** react-native-date-picker 사용할 것 */}
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
            keyboardType="numeric"
          />
          <Input
            title="단위"
            placeholder="개"
            value={todo.unit}
            onChangeText={onChangeText('todo', 'unit')}
          />
          {/** react-native-date-picker 사용할 것 */}
          <Input
            title="시작 시간"
            placeholder="09:00"
            value={todo.startTime}
            onChangeText={onChangeText('todo', 'startTime')}
          />
          {/** react-native-date-picker 사용할 것 */}
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
            {/** react-native-date-picker 사용할 것 */}
            <DateSetter />
            <Radio
              {...method}
              onPress={setMethod}
              type="rect"
              title="생성방식"
            />
            {method.current === 'weekdays' && (
              <>
                <ListOfWeekday title="무슨 요일마다 반복할 지?" />
                <Input
                  title="몇 주 마다 반복할 지?"
                  placeholder="1"
                  value={todo.weekDifference}
                  onChangeText={onChangeText('todo', 'weekDifference')}
                  keyboardType="numeric"
                />
              </>
            )}
            {method.current === 'dateDifference' && (
              <Input
                title="며칠마다 반복할 지?"
                placeholder="1"
                value={todo.dateDifference}
                onChangeText={onChangeText('todo', 'dateDifference')}
                keyboardType="numeric"
              />
            )}
            <Input
              title="amount를 며칠마다 증가시킬 지?"
              placeholder="1"
              value={todo.amountChangeInterval}
              onChangeText={onChangeText('todo', 'amountChangeInterval')}
              keyboardType="numeric"
            />
            <Input
              title="amount를 몇 개씩 증가시킬 지?"
              placeholder="5"
              value={todo.amountDifference}
              onChangeText={onChangeText('todo', 'amountDifference')}
              keyboardType="numeric"
            />
          </InputSection>
        </Animated.View>
      </KeyboardAwareScrollView>
      {type === 'edit' && (
        <DeleteButton type="screen" onPress={onDeleteButtonPress} />
      )}
    </SafeAreaView>
  );
}

export default TodoFormScreen;
