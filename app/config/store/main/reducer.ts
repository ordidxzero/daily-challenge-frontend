import dayjs from 'dayjs';
import { createReducer } from 'typesafe-actions';
import { MainState, MainAction } from './types';
import {
  TOGGLE_PANEL,
  ADD_TODOS,
  TOGGLE_TODO,
  EDIT_TODO,
  DELETE_TODO,
  START_LOADING,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  SELECT_DAY,
  SELECT_DETAIL,
} from './actions';

const initialState: MainState = {
  selectedDay: dayjs().format('YYYY-MM-DD'),
  detail: null,
  panel: {
    create: false,
    todo: false,
    mold: false,
  },
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
  [SELECT_DETAIL]: (state, { payload }) => ({ ...state, detail: payload }),
  [ADD_TODOS]: (state, { payload }) => {
    const oldAgenda = state.agenda.data;
    const newAgenda = oldAgenda.map(agenda => {
      const newTodo = payload.find(
        item => item.dateString === agenda.dateString,
      );
      if (!newTodo) {
        return agenda;
      }
      return {
        dateString: agenda.dateString,
        todos: agenda.todos.concat(newTodo.todo),
      };
    });
    return { ...state, agenda: { ...state.agenda, data: newAgenda } };
  },
  [START_LOADING]: (state, { payload: type }) => ({
    ...state,
    loading: { ...state.loading, [type]: true },
  }),
  [GET_DATA_SUCCESS]: (state, { payload: { type, data } }) => {
    if (type === 'moldData') {
      return {
        ...state,
        moldData: { error: null, data },
        loading: { ...state.loading, moldData: false },
      };
    } else {
      const newData =
        type === 'around'
          ? data
          : type === 'before'
          ? [...data, ...state.agenda.data]
          : [...state.agenda.data, ...data];
      return {
        ...state,
        agenda: { error: null, data: newData },
        loading: { ...state.loading, [type]: false },
      };
    }
  },
  [GET_DATA_FAILURE]: (state, { payload: { type, error } }) => ({
    ...state,
    agenda: { error, ...state.agenda },
    loading: { ...state.loading, [type]: false },
  }),
  [TOGGLE_PANEL]: (state, { payload: { key, isActive } }) => ({
    ...state,
    panel: { ...state.panel, [key]: isActive },
  }),
  [TOGGLE_TODO]: (state, { payload }) => {
    const data = state.agenda.data.find(
      agenda => agenda.dateString === payload.dateString,
    );
    if (data) {
      const newData = data?.todos.map(todo =>
        todo.id === payload.id ? { ...todo, done: !todo.done } : todo,
      );
      return {
        ...state,
        agenda: {
          ...state.agenda,
          data: state.agenda.data.map(item =>
            item.dateString === payload.dateString
              ? { ...item, todos: newData }
              : item,
          ),
        },
      };
    }
    return state;
  },
  [EDIT_TODO]: (state, { payload }) => {
    const data = state.agenda.data.find(
      agenda => agenda.dateString === payload.dateString,
    );
    if (data) {
      const newData = data?.todos.map(todo =>
        todo.id === payload.id ? payload : todo,
      );
      return {
        ...state,
        agenda: {
          ...state.agenda,
          data: state.agenda.data.map(item =>
            item.dateString === payload.dateString
              ? { ...item, todos: newData }
              : item,
          ),
        },
      };
    }
    return state;
  },
  [DELETE_TODO]: (state, { payload }) => {
    const data = state.agenda.data.find(
      agenda => agenda.dateString === payload.dateString,
    );
    if (data) {
      const newData = data?.todos.filter(todo => todo.id !== payload.id);
      return {
        ...state,
        agenda: {
          ...state.agenda,
          data: state.agenda.data.map(item =>
            item.dateString === payload.dateString
              ? { ...item, todos: newData }
              : item,
          ),
        },
      };
    }
    return state;
  },
});

export default reducer;
