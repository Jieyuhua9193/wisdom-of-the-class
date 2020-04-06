import { post } from '@/utils/http';

export default {
  createClass: post('class/create'),
  getAllUser: post('user/get')
}
