import {validationMixin} from 'vuelidate';
import {required} from 'vuelidate/lib/validators';
import Vue from 'vue';

export default Vue.extend({
  mixins: [validationMixin],
  validations: {
    teacherInfo: {
      officeAddress: { required }
    }
  },
  computed: {
    $officeAddress(): any {
      return this.$v.teacherInfo.officeAddress
    }
  },
  methods: {
    check() {
      (this as any).$v.teacherInfo.$touch();
      if (this.$officeAddress.$invalid) {
        this.$Message.warning('必填项不能为空')
        return false
      } else {
        return true
      }
    }
  }
})
