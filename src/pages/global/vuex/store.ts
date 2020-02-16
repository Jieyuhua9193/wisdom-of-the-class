import Role from '../models/Role';

export default interface GlobalState {
  checkedRole: number;
  hadRoles: boolean;
}

export const newGlobalState: GlobalState = {
  checkedRole: Role.MainTeacher,
  hadRoles: false
};
