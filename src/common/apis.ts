import { post } from '@/utils/http';

export default {
  getQiniuToken: post('qiniu/getToken'),
  getClassInfo: post('class/get')
}
