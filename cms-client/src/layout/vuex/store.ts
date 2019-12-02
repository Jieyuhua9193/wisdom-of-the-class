export default interface LayoutState {
 menuOpenEnable: boolean;
 menuSelected: string | null;
}

export const newLayoutState = () => {
 return {
  menuOpenEnable: true,
  menuSelected: null
 }as LayoutState;
};