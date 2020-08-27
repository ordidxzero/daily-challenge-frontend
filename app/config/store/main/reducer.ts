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
  FINISH_LOADING,
  TOGGLE_DARK_MODE,
} from './actions';

const initialState: MainState = {
  selectedDay: dayjs().format('YYYY-MM-DD'),
  detail: null,
  darkMode: false,
  isPanelActive: false,
  agendas: [],
  molds: [],
  error: {},
  loading: {
    mold: false,
    around: false,
    before: false,
    after: false,
    createMold: false,
    deleteTodo: false,
    deleteTodoMold: false,
    editTodo: false,
    editTodoMold: false,
    toggleTodo: false,
  },
};

const reducer = createReducer<MainState, MainAction>(initialState, {
  [SELECT_DAY]: (state, { payload }) => ({ ...state, selectedDay: payload }),
  [SELECT_DETAIL]: (state, { payload }) => ({ ...state, detail: payload }),
  [TOGGLE_PANEL]: (state, { payload }) => ({
    ...state,
    isPanelActive: payload,
  }),
  [TOGGLE_DARK_MODE]: (state, { payload }) => ({ ...state, darkMode: payload }),
  [ADD_DATA]: (state, { payload: { todoData, moldData } }) => {
    const newAgendas = state.agendas.map(agenda => {
      const newTodo = todoData.find(
        todo => todo.dateString === agenda.dateString,
      );
      if (!newTodo) return agenda;
      return { ...agenda, todos: agenda.todos.concat(newTodo.todo) };
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
  [FINISH_LOADING]: (state, { payload: type }) => ({
    ...state,
    loading: { ...state.loading, [type]: false },
  }),
  [GET_DATA_SUCCESS]: (state, { payload: { type, data } }) => {
    if (type === 'mold') {
      return {
        ...state,
        molds: data,
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
      };
    }
  },
  [GET_DATA_FAILURE]: (state, { payload: { type, error } }) => ({
    ...state,
    error: { ...state.error, [type]: error },
  }),
  [TOGGLE_TODO]: (state, { payload: { id, dateString, done } }) => {
    const newAgendaData = state.agendas.map(agenda => {
      if (agenda.dateString !== dateString) return agenda;
      const newTodosData = agenda.todos.map(todo =>
        todo.id !== id ? todo : { ...todo, done },
      );
      return { dateString, todos: newTodosData };
    });
    return { ...state, agendas: newAgendaData };
  },
  [EDIT_TODO]: (state, { payload }) => {
    const newAgendaData = state.agendas.map(agenda => {
      if (agenda.dateString !== payload.dateString) return agenda;
      const newTodosData = agenda.todos.map(todo =>
        todo.id !== payload.id
          ? todo
          : { ...payload, done: todo.done, todoMoldId: todo.todoMoldId },
      );
      return { ...agenda, todos: newTodosData };
    });
    return { ...state, agendas: newAgendaData };
  },
  [DELETE_TODO]: (state, { payload: { id, dateString } }) => {
    const newAgendaData = state.agendas.map(agenda => {
      if (agenda.dateString !== dateString) return agenda;
      const newTodosData = agenda.todos.filter(todo => todo.id !== id);
      return { dateString, todos: newTodosData };
    });
    return { ...state, agendas: newAgendaData };
  },
  [DELETE_TODO_MOLD]: (state, { payload }) => {
    const newMoldData = state.molds.filter(mold => mold.id !== payload);
    const newAgendaData = state.agendas.map(agenda => ({
      ...agenda,
      todos: agenda.todos.filter(todo => todo.todoMoldId !== payload),
    }));
    return {
      ...state,
      molds: newMoldData,
      agendas: newAgendaData,
    };
  },
  [EDIT_TODO_MOLD]: (
    state,
    { payload: { oldTodoMoldId, newTodoMoldId, restartDate } },
  ) => {
    const newMoldData = state.molds.filter(mold => mold.id !== oldTodoMoldId);
    const newAgendaData = state.agendas.map(agenda => {
      const isBeforeStandard = dayjs(agenda.dateString).isBefore(restartDate);
      const newTodosData = isBeforeStandard
        ? agenda.todos.map(todo => ({
            ...todo,
            todoMoldId: newTodoMoldId,
          }))
        : agenda.todos.filter(todo => todo.todoMoldId !== oldTodoMoldId);
      return { ...agenda, todos: newTodosData };
    });
    return {
      ...state,
      agendas: newAgendaData,
      molds: newMoldData,
    };
  },
});

export default reducer;
