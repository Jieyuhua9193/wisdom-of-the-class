export default interface LayoutState {
 menuOpenEnable: boolean;
 menuSelected: object | null;
}

export const newLayoutState = () => {
 return {
  menuOpenEnable: true,
  menuSelected: {
   name: null,
   parent: null
  }
 }as LayoutState;
};