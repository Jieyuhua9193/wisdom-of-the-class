import { AppState } from "@/store";
import { mapState } from "vuex";

export default {
  computed: mapState({
    classInfo(state: AppState): object {
      return state.commonState.classInfo;
    }
  })
}
