import { post } from '@/utils/http';
import { get } from '@/utils/http';

export default {
  getQiniuToken: post('qiniu/getToken'),
  getClassInfo: post('class/get'),
  downloadUserTpl: get('user/downloadTpl'),
  importUsers: post('user/importUsers')
}
