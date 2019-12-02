import { AppState } from '@/store';

export default {
 UPDATE_MENU_OPEN_ENABLE:(state: AppState) => {
  state.layoutState.menuOpenEnable = !state.layoutState.menuOpenEnable
 },
 UPDATE_MENU_SELECTED:(state: AppState,payload: string) => {
  state.layoutState.menuSelected = payload
 }
}