import { post } from '@/utils/http';

export default {
  get: post('user/get'),
  search: post('user/search'),
  getUserInfoByEmail: post('user/get-by-email'),
  getDormitories: post('dormitory/get'),
  updateUser: post('user/update'),
  remove: post('/class/remove'),
  getDorStudents: post('/dormitory/get-student')
}
