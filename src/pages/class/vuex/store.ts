import UserType from '@/pages/class/models/UserType'

export default interface ClassState {
  userType: number;
  refreshCount: number;
}

export const newClassState: ClassState = {
  userType: UserType.student,
  refreshCount: 0
};

