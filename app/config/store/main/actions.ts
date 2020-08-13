import { createAsyncAction, createAction } from 'typesafe-actions';
import {
  FakeTodoData,
  ToggledTodoData,
  PanelData,
  EditTodoDataType,
  RequestType,
  SuccessType,
  FailureType,
} from './types';

export const SELECT_DAY = 'main/SELECT_DAY';
export const ADD_TODOS = 'main/ADD_TODOS';
export const EDIT_TODO = 'main/EDIT_TODO';
export const DELETE_TODO = 'main/DELETE_TODO';
export const SELECT_TODO = 'main/SELECT_TODO';
export const TOGGLE_TODO = 'main/TOGGLE_TODO';
export const START_LOADING = 'main/START_LOADING';
export const GET_DATA_SUCCESS = 'main/GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'main/GET_DATA_FAILURE';
export const SET_STATUS_BAR_STYLE = 'main/SET_STATUS_BAR_STYLE';
export const TOGGLE_PANEL = 'main/TOGGLE_PANEL';

export const selectDay = createAction(SELECT_DAY)<string>();
export const addTodos = createAction(ADD_TODOS)<FakeTodoData>();
export const editTodo = createAction(EDIT_TODO)<EditTodoDataType>();
export const deleteTodo = createAction(DELETE_TODO)<ToggledTodoData>();
export const selectTodo = createAction(SELECT_TODO)<string>();
export const getDataAsync = createAsyncAction(
  START_LOADING,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
)<RequestType, SuccessType, FailureType>();
export const toggleSwipeablePanel = createAction(TOGGLE_PANEL)<PanelData>();
export const toggleTodo = createAction(TOGGLE_TODO)<ToggledTodoData>();
export const setStatusBarStyle = createAction(SET_STATUS_BAR_STYLE)<
  'dark-content' | 'light-content'
>();
