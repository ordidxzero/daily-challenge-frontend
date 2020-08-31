// Modules
import React, { useEffect, useRef, useMemo } from 'react';
import { Animated, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// Utils
import { CustomStackScreenProp } from './types';
// Hooks
import useInput from '../hooks/common/useInput';
import useRadioState from '../hooks/floatingPanel/useRadioState';
import useFoldAnimation from '../hooks/floatingPanel/useFoldAnimation';
import useUnmountReset from '../hooks/common/useUnmountReset';
import useReduxState from '../hooks/common/useReduxState';
import useDeleteTodoMold from '../hooks/apollo/useDeleteTodoMold';
// Components
import Input from '../components/common/Input';
import InputSection from '../components/common/FloatingPanelWrapper/InputSection';
import Radio from '../components/common/Radio';
import ListOfWeekday from '../components/main/ListOfWeekday';
import DateSetter from '../components/todoForm/DateSetter';
import DeleteButton from '../components/common/DeleteButton';
import CustomSafeAreaView from './CustomSafeAreaView';

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
  const { hardenForm, onChangeText } = useInput();
  const { todo } = hardenForm;
  const fixedStartdate = useMemo(() => todo.startDate, []);
  const { deleteTodoMold, loading: deleteLoading } = useDeleteTodoMold();
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
    <CustomSafeAreaView
      headerTitle={type === 'create' ? '할 일 생성하기' : '수정하기'}
      headerType={type}>
      <KeyboardAwareScrollView
        style={{ padding: 10 }}
        onScrollBeginDrag={() => Keyboard.dismiss()}
        ref={scrollView}
        showsVerticalScrollIndicator={false}>
        <InputSection title="BASIC INFOMATION">
          {/** react-native-date-picker 사용할 것 */}
          <Input
            title="시작 날짜"
            placeholder={todo.startDate}
            value={type === 'create' ? todo.startDate : fixedStartdate}
            onChangeText={onChangeText('todo', 'startDate')}
            disabled
            required
          />
          <Input
            title="제목"
            placeholder="푸쉬업"
            value={todo.title}
            onChangeText={onChangeText('todo', 'title')}
            required
          />
          {type === 'create' && (
            <Input
              title="목표량"
              placeholder="5"
              value={todo.amount}
              onChangeText={onChangeText('todo', 'amount')}
              keyboardType="numeric"
            />
          )}
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
        {type === 'create' && (
          <Radio
            {...isRepeat}
            onPress={setIsRepeat}
            title="반복하시겠습니까?"
          />
        )}
        <Animated.View
          style={{
            height: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 670],
              extrapolate: 'clamp',
            }),
            overflow: 'hidden',
          }}>
          <InputSection title="ADVANCED INFOMATION">
            {/** react-native-date-picker 사용할 것 */}
            <DateSetter type={type} />
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
            {type === 'edit' && (
              <Input
                title="목표량 재설정"
                placeholder="5"
                value={todo.amount}
                onChangeText={onChangeText('todo', 'amount')}
                keyboardType="numeric"
              />
            )}
          </InputSection>
        </Animated.View>
      </KeyboardAwareScrollView>
      {type === 'edit' && (
        <DeleteButton
          type="screen"
          loading={deleteLoading}
          onPress={onDeleteButtonPress}
        />
      )}
    </CustomSafeAreaView>
  );
}

export default TodoFormScreen;
