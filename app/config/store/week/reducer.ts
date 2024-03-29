import { createReducer } from 'typesafe-actions';
import { AddTodoState, AddTodoAction } from './types';
import { SELECT_DAY_OF_WEEK, RESET_STATE } from './actions';

const initialState: AddTodoState = [
  { day: '일', selected: false },
  { day: '월', selected: false },
  { day: '화', selected: false },
  { day: '수', selected: false },
  { day: '목', selected: false },
  { day: '금', selected: false },
  { day: '토', selected: false },
];

const reducer = createReducer<AddTodoState, AddTodoAction>(initialState, {
  [SELECT_DAY_OF_WEEK]: (state, { payload }) => {
    if (typeof payload === 'string') {
      return state.map(({ day, selected }) =>
        day === payload ? { day, selected: !selected } : { day, selected },
      );
    }
    return state.map(({ day, selected }, index) =>
      payload.includes(index) ? { day, selected: true } : { day, selected },
    );
  },
  [RESET_STATE]: () => initialState,
});

export default reducer;
