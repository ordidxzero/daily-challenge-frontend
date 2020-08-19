import dayjs from 'dayjs';
import { createReducer } from 'typesafe-actions';
import { InputAction, InputState } from './types';
import {
  ON_CHANGE_TEXT,
  RESET_INPUT,
  ON_CHANGE_MULTIPLE_TEXTS,
} from './actions';

const initialState: InputState = {
  auth: {
    username: '',
    password: '',
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
  [ON_CHANGE_TEXT]: (state, { payload: { field, key, value } }) => ({
    ...state,
    [field]: { ...state[field], [key]: value },
  }),
  [ON_CHANGE_MULTIPLE_TEXTS]: (state, { payload: { field, data } }) => {
    const formattedData = Object.keys(data).map(key =>
      typeof data[key] === 'number' ? String(data[key]) : data[key],
    );
    return {
      ...state,
      [field]: { ...state[field], ...formattedData },
    };
  },
  [RESET_INPUT]: () => initialState,
});

export default reducer;
