import { AppState } from "@/store";
import { mapState } from "vuex";

export default {
  computed: mapState({
    email(state: AppState): string | null {
      return state.userState.email;
    },
    passwordInfo(state: AppState): object | null {
      return state.userState.passwordInfo;
    },
    sendActivationEmailWaitTime(state: AppState): number {
      return state.userAccountState.sendActivationEmailWaitTime;
    },
    userInfo(state: AppState): object {
      return state.userState.userInfo
    }
  })
}