import dayjs from 'dayjs';
import { createReducer } from 'typesafe-actions';
import { MainState, MainAction } from './types';
import {
  TOGGLE_PANEL,
  ADD_DATA,
  TOGGLE_TODO,
  EDIT_TODO,
  DELETE_TODO,
  DELETE_TODO_MOLD,
  START_LOADING,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  SELECT_DAY,
  SELECT_DETAIL,
  EDIT_TODO_MOLD,
} from './actions';

const initialState: MainState = {
  selectedDay: dayjs().format('YYYY-MM-DD'),
  detail: null,
  panel: {
    create: false,
    todo: false,
    mold: false,
  },
  agendas: [],
  molds: [],
  error: {
    around: null,
    before: null,
    after: null,
    mold: null,
  },
  loading: {
    mold: false,
    around: false,
    before: false,
    after: false,
  },
};

const reducer = createReducer<MainState, MainAction>(initialState, {
  [SELECT_DAY]: (state, { payload }) => ({ ...state, selectedDay: payload }),
  [SELECT_DETAIL]: (state, { payload }) => ({ ...state, detail: payload }),
  [ADD_DATA]: (state, { payload: { todoData, moldData } }) => {
    const oldAgendas = state.agendas;
    const newAgendas = oldAgendas.map(agenda => {
      const newTodo = todoData.find(
        todo => todo.dateString === agenda.dateString,
      );
      if (!newTodo) {
        return agenda;
      }
      return {
        dateString: agenda.dateString,
        todos: agenda.todos.concat(newTodo.todo),
      };
    });
    return {
      ...state,
      agendas: newAgendas,
      molds: state.molds.concat(moldData),
    };
  },
  [START_LOADING]: (state, { payload: type }) => ({
    ...state,
    loading: { ...state.loading, [type]: true },
  }),
  [GET_DATA_SUCCESS]: (state, { payload: { type, data } }) => {
    if (type === 'mold') {
      return {
        ...state,
        moldData: { error: null, data },
        loading: { ...state.loading, moldData: false },
      };
    } else {
      const newAgendaData =
        type === 'around'
          ? data
          : type === 'before'
          ? [...data, ...state.agendas]
          : [...state.agendas, ...data];
      return {
        ...state,
        agendas: newAgendaData,
        loading: { ...state.loading, [type]: false },
      };
    }
  },
  [GET_DATA_FAILURE]: (state, { payload: { type, error } }) => ({
    ...state,
    error: { ...state.error, [type]: error },
    loading: { ...state.loading, [type]: false },
  }),
  [TOGGLE_PANEL]: (state, { payload: { key, isActive } }) => ({
    ...state,
    panel: { ...state.panel, [key]: isActive },
  }),
  [TOGGLE_TODO]: (state, { payload }) => {
    const data = state.agendas.find(
      agenda => agenda.dateString === payload.dateString,
    );
    if (data) {
      const newData = data?.todos.map(todo =>
        todo.id === payload.id ? { ...todo, done: !todo.done } : todo,
      );
      return {
        ...state,
        agendas: state.agendas.map(agenda =>
          agenda.dateString === payload.dateString
            ? { ...agenda, todos: newData }
            : agenda,
        ),
      };
    }
    return state;
  },
  [EDIT_TODO]: (state, { payload }) => {
    const data = state.agendas.find(
      agenda => agenda.dateString === payload.dateString,
    );
    if (data) {
      const newData = data?.todos.map(todo =>
        todo.id === payload.id ? { ...payload, done: todo.done } : todo,
      );
      return {
        ...state,
        agendas: state.agendas.map(item =>
          item.dateString === payload.dateString
            ? { ...item, todos: newData }
            : item,
        ),
      };
    }
    return state;
  },
  [DELETE_TODO]: (state, { payload }) => {
    const data = state.agendas.find(
      agenda => agenda.dateString === payload.dateString,
    );
    if (data) {
      const newData = data?.todos.filter(todo => todo.id !== payload.id);
      return {
        ...state,
        agendas: state.agendas.map(agenda =>
          agenda.dateString === payload.dateString
            ? { ...agenda, todos: newData }
            : agenda,
        ),
      };
    }
    return state;
  },
  [DELETE_TODO_MOLD]: (state, { payload }) => {
    const newMoldData = state.molds.filter(mold => mold.id !== payload);
    const newAgendaData = state.agendas.map(data => ({
      ...data,
      todos: data.todos.filter(todo => todo.todoMoldId !== payload),
    }));
    return {
      ...state,
      molds: newMoldData,
      agendas: newAgendaData,
    };
  },
  [EDIT_TODO_MOLD]: (state, { payload: { id, data, todoData } }) => {
    const newMoldData = state.molds.map(mold =>
      mold.id === id ? { ...mold, ...data } : mold,
    );
    const oldAgenda = state.agendas;
    const filterOldAgenda = oldAgenda.map(agenda => {
      // restartDate 가 있어야됨
      const filteredTodos = agenda.todos.filter(todo => todo.todoMoldId !== id);
      return {
        dateString: agenda.dateString,
        todos: filteredTodos,
      };
    });
    const newAgendaData = filterOldAgenda.map(agenda => {
      const newTodo = todoData.find(
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
    return {
      ...state,
      agendas: newAgendaData,
      molds: newMoldData,
    };
  },
});

export default reducer;
