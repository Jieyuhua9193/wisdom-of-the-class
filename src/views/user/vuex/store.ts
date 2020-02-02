export default interface UserState {
  email: string | null;
  passwordInfo: object | null;
  userInfo: object;
}

export const newUserState: UserState = {
  email: null,
  passwordInfo: null,
  userInfo: {}
};

export interface UserAccountState {
  sendActivationEmailWaitTime: number;
}

export const newUserAccountState: UserAccountState = {
  sendActivationEmailWaitTime: 0,
}

