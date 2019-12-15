import { AppState } from '@/store';

export default {
 UPDATE_MENU_OPEN_ENABLE:(state: AppState, enable: boolean) => {
  if (enable !== undefined) {
   state.layoutState.menuOpenEnable = enable
  } else {
   state.layoutState.menuOpenEnable = !state.layoutState.menuOpenEnable
  }
 },
 UPDATE_MENU_SELECTED:(state: AppState, menuItem : object) => {
  state.layoutState.menuSelected = menuItem
 }
}