import { createAction, ActionType, createReducer } from 'typesafe-actions';

const SET_TOKEN = 'login/SET_TOKEN';

export const setToken = createAction(SET_TOKEN)<string | null>();

type LoginAction = ActionType<typeof setToken>;

type LoginState = string | null;

const initialState: LoginState = null;

const reducer = createReducer<LoginState, LoginAction>(initialState, {
  [SET_TOKEN]: (_, { payload }) => payload,
});

export default reducer;
