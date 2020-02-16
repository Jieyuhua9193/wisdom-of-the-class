import { post } from '@/utils/http'

export default {
  login: post('user/login'),
  register: post('user/register'),
  getVerificationCode: post('user/get-verification-code'),
  activate: post('user/activate'),
  get: post('user/get'),
  update: post('user/update')
}
