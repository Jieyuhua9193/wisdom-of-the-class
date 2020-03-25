import { AppState } from "@/store";

export default {
  SET_CLASS_INFO: (state: AppState, classInfo: object) => {
    state.commonState.classInfo = classInfo
  }
}
