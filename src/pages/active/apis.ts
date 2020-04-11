import { post } from '@/utils/http';

export default {
  get: post('active/get'),
  create: post('/active/create')
}
