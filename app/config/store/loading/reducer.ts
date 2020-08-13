import { createReducer } from 'typesafe-actions';
import { LoadingState, LoadingAction } from './types';
import { START_LOADING, FINISH_LOADING } from './actions';

const initialState: LoadingState = {};

const reducer = createReducer<LoadingState, LoadingAction>(initialState, {
  [START_LOADING]: (state, { payload }) => ({ ...state, [payload]: true }),
  [FINISH_LOADING]: (state, { payload }) => ({ ...state, [payload]: false }),
});

export default reducer;
