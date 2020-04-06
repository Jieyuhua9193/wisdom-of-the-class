import { AppState } from '@/store';

interface ViewStyle {
 width: number,
 height: number
}
export default {
 UPDATE_MENU_OPEN_ENABLE:(state: AppState, enable: boolean) => {
  if (enable === undefined) {
   state.layoutState.menuOpenEnable = !state.layoutState.menuOpenEnable
  } else {
   state.layoutState.menuOpenEnable = enable
  }
 },
 UPDATE_MENU_SELECTED:(state: AppState, menuItem : object) => {
  state.layoutState.menuSelected = menuItem
 },
 UPDATE_VIEW_STYLE:(state: AppState, viewStyle: ViewStyle) => {
  state.layoutState.viewStyle = viewStyle
 }
}
