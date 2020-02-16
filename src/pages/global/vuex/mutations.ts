import {AppState} from "@/store";

export default {
  UPDATE_CHECKED_ROLE: (state: AppState, role: number) => {
    state.globalState.checkedRole = role;
  },
  UPDATE_HAD_ROLES: (state: AppState, enable: boolean) => {
    state.globalState.hadRoles = enable;
  }
}
