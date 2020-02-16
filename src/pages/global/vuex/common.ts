import {AppState} from "@/store";
import {mapState} from "vuex";

export default {
  computed: mapState({
    checkedRole(state: AppState): number {
      return state.globalState.checkedRole
    },
    hadRoles(state: AppState): boolean {
      return state.globalState.hadRoles
    }
  })
}
