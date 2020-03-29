import { post } from '@/utils/http';

export default {
  get: post('student/get'),
  search: post('student/search')
}
