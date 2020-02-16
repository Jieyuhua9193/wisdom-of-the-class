import {validationMixin} from 'vuelidate';
import {required} from 'vuelidate/lib/validators';
import {helpers} from 'vuelidate/lib/validators'
import Vue from 'vue'

const phone = helpers.regex('phoneNumber', /^1(3|4|5|7|8)\d{9}$/);

export default Vue.extend({
  mixins: [validationMixin],
  validations: {
    baseInfo: {
      phoneNumber: { required, phone },
      realName: { required },
      qq: { required }
    }
  },
  computed: {
    $phoneNumber(): any {
      return this.$v.baseInfo.phoneNumber
    },
    $realName(): any {
      return this.$v.baseInfo.realName
    },
    $qq(): any {
      return this.$v.baseInfo.qq
    },
  },
  methods: {
    check() {
      (this as any).$v.baseInfo.$touch();
      if (this.$phoneNumber.$invalid) {
        this.$Message.warning('手机号格式有误')
      } else if (this.$realName.$invalid || this.$qq.$invalid) {
        this.$Message.warning('必填项不能为空')
      }
    }
  }
})
