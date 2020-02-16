import { AppState } from "@/store";

export default {
  SAVE_USER_EMAIL: (state: AppState, email: string) => {
    state.userState.email = email
  },
  REMEMBER_PASSWORD: (state: AppState, pwdInfo: object) => {
    state.userState.passwordInfo = pwdInfo
  },
  UPDATE_SEND_ACTIVATION_EMAIL_TIME: (state: AppState) => {
    let timer: any;
    state.userAccountState.sendActivationEmailWaitTime = 10;
    timer = setInterval(() => {
      state.userAccountState.sendActivationEmailWaitTime--;
      if (state.userAccountState.sendActivationEmailWaitTime === 0) {
        clearInterval(timer)
      }
    }, 1000);
  },
  UPDATE_USER_INFO: (state: AppState, userInfo: object) => {
    state.userState.userInfo = userInfo
  }
}