// ------------------ useInput.ts Props ------------------

export type AuthInputState = {
  username: string;
  password: string;
};

export type TodoInputState = {
  startDate?: string;
  endDate?: string; // TODO: 나중에 필수로 바꿀 것
  title: string;
  amount: string;
  unit?: string;
  startTime?: string;
  endTime?: string;
  weekDifference: string;
  dateDifference: string;
  amountChangeInterval: string;
  amountDifference: string;
};

export type useInputState = {
  auth: AuthInputState;
  todo: TodoInputState;
};

// -------------------------------------------------------
