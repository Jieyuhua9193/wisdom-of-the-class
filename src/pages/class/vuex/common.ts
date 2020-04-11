import {mapState} from "vuex";
import {AppState} from "@/store";

export default {
  computed: mapState({
    userType(state: AppState): number {
      return state.classState.userType
    },
    refreshCount(state: AppState): number {
      return state.classState.refreshCount
    }
  })
}
