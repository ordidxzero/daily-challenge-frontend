import { createAsyncAction, createAction } from 'typesafe-actions';
import { ApolloError } from '@apollo/client';

export const SELECT_DAY = 'main/SELECT_DAY';
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

export const selectDay = createAction(SELECT_DAY)<string>();
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
  boolean
>();
