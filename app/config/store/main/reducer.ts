import dayjs from 'dayjs';
import { createReducer } from 'typesafe-actions';
import { MainState, MainAction } from './types';
import {
  SELECT_DAY,
  GET_AROUND_TODOS,
  GET_AFTER_TODOS_SUCCESS,
  GET_AROUND_TODOS_FAILURE,
  GET_BEFORE_TODOS,
  GET_BEFORE_TODOS_SUCCESS,
  GET_BEFORE_TODOS_FAILURE,
  GET_AFTER_TODOS,
  GET_AROUND_TODOS_SUCCESS,
  GET_AFTER_TODOS_FAILURE,
  TOGGLE_SWIPEABLE_PANEL,
  GET_MOLD_DATA,
  GET_MOLD_DATA_SUCCESS,
  GET_MOLD_DATA_FAILURE,
} from './actions';

const initialState: MainState = {
  selectedDay: dayjs().format('YYYY-MM-DD'),
  isPanelActive: false,
  agenda: {
    data: [],
    error: null,
  },
  moldData: {
    data: [],
    error: null,
  },
  loading: {
    moldData: false,
    around: false,
    before: false,
    after: false,
  },
};

const reducer = createReducer<MainState, MainAction>(initialState, {
  [SELECT_DAY]: (state, { payload }) => ({ ...state, selectedDay: payload }),
  [GET_MOLD_DATA]: state => ({
    ...state,
    loading: { ...state.loading, moldData: true },
  }),
  [GET_AROUND_TODOS]: state => ({
    ...state,
    loading: { ...state.loading, around: true },
  }),
  [GET_BEFORE_TODOS]: state => ({
    ...state,
    loading: { ...state.loading, before: true },
  }),
  [GET_AFTER_TODOS]: state => ({
    ...state,
    loading: { ...state.loading, after: true },
  }),
  [GET_MOLD_DATA_SUCCESS]: (state, { payload }) => ({
    ...state,
    moldData: { error: null, data: payload },
    loading: { ...state.loading, moldData: false },
  }),
  [GET_AROUND_TODOS_SUCCESS]: (state, { payload }) => ({
    ...state,
    agenda: { error: null, data: payload },
    loading: { ...state.loading, around: false },
  }),
  [GET_BEFORE_TODOS_SUCCESS]: (state, { payload }) => ({
    ...state,
    agenda: { error: null, data: [...payload, ...state.agenda.data] },
    loading: { ...state.loading, before: false },
  }),
  [GET_AFTER_TODOS_SUCCESS]: (state, { payload }) => ({
    ...state,
    agenda: { error: null, data: [...state.agenda.data, ...payload] },
    loading: { ...state.loading, after: false },
  }),
  [GET_MOLD_DATA_FAILURE]: (state, { payload }) => ({
    ...state,
    moldData: { error: payload, ...state.moldData },
    loading: { ...state.loading, moldData: false },
  }),
  [GET_AROUND_TODOS_FAILURE]: (state, { payload }) => ({
    ...state,
    agenda: { error: payload, ...state.agenda },
    loading: { ...state.loading, around: false },
  }),
  [GET_BEFORE_TODOS_FAILURE]: (state, { payload }) => ({
    ...state,
    agenda: { error: payload, ...state.agenda },
    loading: { ...state.loading, before: false },
  }),
  [GET_AFTER_TODOS_FAILURE]: (state, { payload }) => ({
    ...state,
    agenda: { error: payload, ...state.agenda },
    loading: { ...state.loading, after: false },
  }),
  [TOGGLE_SWIPEABLE_PANEL]: (state, { payload }) => ({
    ...state,
    isPanelActive: payload,
  }),
});

export default reducer;
