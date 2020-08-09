import { createAsyncAction, createAction } from 'typesafe-actions';
import { ApolloError } from '@apollo/client';
import {
  FakeTodoData,
  ToggledTodoData,
  PanelData,
  EditTodoDataType,
} from './types';

export const SELECT_DAY = 'main/SELECT_DAY';
export const ADD_TODOS = 'main/ADD_TODOS';
export const EDIT_TODO = 'main/EDIT_TODO';
export const DELETE_TODO = 'main/DELETE_TODO';
export const SELECT_TODO = 'main/SELECT_TODO';
export const GET_MOLD_DATA = 'main/GET_MOLD_DATA';
export const GET_MOLD_DATA_SUCCESS = 'main/GET_MOLD_DATA_SUCCESS';
export const GET_MOLD_DATA_FAILURE = 'main/GET_MOLD_DATA_FAILURE';
export const GET_AROUND_TODOS = 'main/GET_AROUND_TODOS';
export const GET_AROUND_TODOS_SUCCESS = 'main/GET_AROUND_TODOS_SUCCESS';
export const GET_AROUND_TODOS_FAILURE = 'main/GET_AROUND_TODOS_FAILURE';
export const GET_BEFORE_TODOS = 'main/GET_BEFORE_TODOS';
export const GET_BEFORE_TODOS_SUCCESS = 'main/GET_BEFORE_TODOS_SUCCESS';
export const GET_BEFORE_TODOS_FAILURE = 'main/GET_BEFORE_TODOS_FAILURE';
export const GET_AFTER_TODOS = 'main/GET_AFTER_TODOS';
export const GET_AFTER_TODOS_SUCCESS = 'main/GET_AFTER_TODOS_SUCCESS';
export const GET_AFTER_TODOS_FAILURE = 'main/GET_AFTER_TODOS_FAILURE';
export const TOGGLE_SWIPEABLE_PANEL = 'main/TOGGLE_SWIPEABLE_PANEL';
export const TOGGLE_TODO = 'main/TOGGLE_TODO';
export const SET_STATUS_BAR_STYLE = 'main/SET_STATUS_BAR_STYLE';

export const selectDay = createAction(SELECT_DAY)<string>();
export const addTodos = createAction(ADD_TODOS)<FakeTodoData>();
export const editTodo = createAction(EDIT_TODO)<EditTodoDataType>();
export const deleteTodo = createAction(DELETE_TODO)<ToggledTodoData>();
export const selectTodo = createAction(SELECT_TODO)<string>();
export const getMoldDataAsync = createAsyncAction(
  GET_MOLD_DATA,
  GET_MOLD_DATA_SUCCESS,
  GET_MOLD_DATA_FAILURE,
)<undefined, any, ApolloError>();
export const getAroundTodosAsync = createAsyncAction(
  GET_AROUND_TODOS,
  GET_AROUND_TODOS_SUCCESS,
  GET_AROUND_TODOS_FAILURE,
)<undefined, any, ApolloError>();
export const getBeforeTodosAsync = createAsyncAction(
  GET_BEFORE_TODOS,
  GET_BEFORE_TODOS_SUCCESS,
  GET_BEFORE_TODOS_FAILURE,
)<undefined, any, ApolloError>();
export const getAfterTodosAsync = createAsyncAction(
  GET_AFTER_TODOS,
  GET_AFTER_TODOS_SUCCESS,
  GET_AFTER_TODOS_FAILURE,
)<undefined, any, ApolloError>();
export const toggleSwipeablePanel = createAction(TOGGLE_SWIPEABLE_PANEL)<
  PanelData
>();
export const toggleTodo = createAction(TOGGLE_TODO)<ToggledTodoData>();
export const setStatusBarStyle = createAction(SET_STATUS_BAR_STYLE)<
  'dark-content' | 'light-content'
>();
