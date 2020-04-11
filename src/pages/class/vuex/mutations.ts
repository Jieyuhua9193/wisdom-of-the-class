import {AppState} from '@/store';

export default {
  UPDATE_CLASS_USER_TYPE: (state: AppState, type: number) => {
    state.classState.userType = type
  },
  REFRESH_USER: (state: AppState) => {
    state.classState.refreshCount++;
  }
}
