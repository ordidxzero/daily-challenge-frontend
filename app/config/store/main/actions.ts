import { createAsyncAction, createAction } from 'typesafe-actions';
import {
  FakeData,
  ToggledTodoData,
  PanelData,
  EditTodoDataType,
  RequestType,
  SuccessType,
  FailureType,
  EditTodoMoldDataType,
} from './types';

export const SELECT_DAY = 'main/SELECT_DAY';
export const SELECT_DETAIL = 'main/SELECT_DETAIL';
export const ADD_DATA = 'main/ADD_DATA';
export const EDIT_TODO = 'main/EDIT_TODO';
export const EDIT_TODO_MOLD = 'main/EDIT_TODO_MOLD';
export const DELETE_TODO = 'main/DELETE_TODO';
export const TOGGLE_TODO = 'main/TOGGLE_TODO';
export const DELETE_TODO_MOLD = 'main/DELETE_TODO_MOLD';
export const START_LOADING = 'main/START_LOADING';
export const GET_DATA_SUCCESS = 'main/GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'main/GET_DATA_FAILURE';
export const TOGGLE_PANEL = 'main/TOGGLE_PANEL';

export const selectDay = createAction(SELECT_DAY)<string>();
export const selectDetail = createAction(SELECT_DETAIL)<string>();
export const addData = createAction(ADD_DATA)<FakeData>();
export const editTodo = createAction(EDIT_TODO)<EditTodoDataType>();
export const editTodoMold = createAction(EDIT_TODO_MOLD)<
  EditTodoMoldDataType
>();
export const deleteTodo = createAction(DELETE_TODO)<ToggledTodoData>();
export const deleteTodoMold = createAction(DELETE_TODO_MOLD)<string>();
export const getDataAsync = createAsyncAction(
  START_LOADING,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
)<RequestType, SuccessType, FailureType>();
export const toggleSwipeablePanel = createAction(TOGGLE_PANEL)<PanelData>();
export const toggleTodo = createAction(TOGGLE_TODO)<ToggledTodoData>();
