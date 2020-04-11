enum Role {
  admin = 0,
  counselor = 1,
  teacher = 2,
  classMonitor = 3,
  viceClassMonitor = 4,
  partyBranch = 5,
  vicePartyBranch = 6,
  financial = 7,
  lifeAdmin = 8,
  culturalAdmin = 9,
  moralEducationAdmin = 10,
  custom = 11,
  student = 12
}

export const getRoleText = (role: number): string => {
  switch (role) {
    case Role.admin:
      return '班主任';
    case Role.counselor:
      return '辅导员';
    case Role.teacher:
      return '老师';
    case Role.classMonitor:
      return '班长';
    case Role.viceClassMonitor:
      return '副班长';
    case Role.partyBranch:
      return '团支书';
    case Role.vicePartyBranch:
      return '副团支书';
    case Role.financial:
      return '财务';
    case Role.lifeAdmin:
      return '生活委员';
    case Role.culturalAdmin:
      return '文艺委员';
    case Role.moralEducationAdmin:
      return '学习委员';
    default:
      return '';
  }
};


export default Role

