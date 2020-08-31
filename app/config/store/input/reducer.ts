import dayjs from 'dayjs';
import { createReducer } from 'typesafe-actions';
import { InputAction, InputState } from './types';
import { ON_CHANGE_TEXT, RESET_INPUT } from './actions';

const initialState: InputState = {
  auth: {
    username: '',
    password: '',
    startDayTime: '',
    endDayTime: '',
  },
  todo: {
    startDate: dayjs().format('YYYY-MM-DD'),
    endDate: dayjs().add(1, 'month').format('YYYY-MM-DD'),
    title: '',
    amount: '',
    unit: '',
    isRepeat: false,
    method: 'weekdays',
    startTime: '',
    endTime: '',
    weekDifference: '',
    dateDifference: '',
    amountDifference: '',
    amountChangeInterval: '',
  },
};

const reducer = createReducer<InputState, InputAction>(initialState, {
  [ON_CHANGE_TEXT]: (state, { payload: { field, key, value } }) => {
    const typeCastedValue = typeof value === 'number' ? String(value) : value;
    return {
      ...state,
      [field]: { ...state[field], [key]: typeCastedValue },
    };
  },
  [RESET_INPUT]: () => initialState,
});

export default reducer;
