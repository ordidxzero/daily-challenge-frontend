// TODO: apollo client의 local state로 옮길 것. directory rule에 안맞음

const SET_TOKEN = "login/SET_TOKEN" as const;

export const setToken = (token: string | null) => ({
  type: SET_TOKEN,
  payload: token,
});

type LoginAction = ReturnType<typeof setToken>;

type LoginState = {
  token: string | null;
};

const initialState: LoginState = {
  token: null,
};

function loginReducer(
  state: LoginState = initialState,
  action: LoginAction
): LoginState {
  switch (action.type) {
    case SET_TOKEN:
      return { token: action.payload };

    default:
      return state;
  }
}

export default loginReducer;
