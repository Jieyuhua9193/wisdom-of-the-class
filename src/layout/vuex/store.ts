export default interface LayoutState {
  menuOpenEnable: boolean;
  menuSelected: object | null;
  viewStyle: {
    width: number,
    height: number
  };
}

export const newLayoutState = () => {
  return {
    menuOpenEnable: true,
    menuSelected: {
      name: null,
      parent: null
    },
    viewStyle: {
      width: 0,
      height: 0
    }
  } as LayoutState;
};
