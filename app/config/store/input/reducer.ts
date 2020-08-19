import dayjs from 'dayjs';
import { createReducer } from 'typesafe-actions';
import { InputAction, InputState } from './types';
import { ON_CHANGE_TEXT, RESET_INPUT } from './actions';

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
  [RESET_INPUT]: () => initialState,
});

export default reducer;
