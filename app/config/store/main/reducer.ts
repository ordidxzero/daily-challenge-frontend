import moment from "moment";
import { createReducer } from "typesafe-actions";
import { MainState, MainAction } from "./types";
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
} from "./actions";

const initialState: MainState = {
  selectedDay: moment().format("YYYY-MM-DD"),
  agenda: {
    data: [],
    error: null,
  },
  loading: {
    around: false,
    before: false,
    after: false,
  },
};

const reducer = createReducer<MainState, MainAction>(initialState, {
  [SELECT_DAY]: (state, { payload }) => ({ ...state, selectedDay: payload }),
  [GET_AROUND_TODOS]: (state) => ({
    ...state,
    loading: { ...state.loading, around: true },
  }),
  [GET_BEFORE_TODOS]: (state) => ({
    ...state,
    loading: { ...state.loading, before: true },
  }),
  [GET_AFTER_TODOS]: (state) => ({
    ...state,
    loading: { ...state.loading, after: true },
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
});

export default reducer;
