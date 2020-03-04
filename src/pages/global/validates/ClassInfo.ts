import {validationMixin} from 'vuelidate';
import {required} from 'vuelidate/lib/validators';
import Vue from 'vue';

export default Vue.extend({
  mixins: [validationMixin],
  validations: {
    classInfo: {
      schoolName: { required },
      department: { required },
      name: { required },
      avatar: { required },
      professional: { required },
      dormitories: { required },
    }
  },
  computed: {
    $schoolName(): any {
      return this.$v.classInfo.schoolName
    },
    $department(): any {
      return this.$v.classInfo.department
    },
    $name(): any {
      return this.$v.classInfo.name
    },
    $avatar(): any {
      return this.$v.classInfo.avatar
    },
    $professional(): any {
      return this.$v.classInfo.professional
    },
    $dormitories(): any {
      return this.$v.classInfo.dormitories
    }
  },
  methods: {
    check() {
      (this as any).$v.classInfo.$touch();
      if (this.$v.$dirty && this.$v.$invalid) {
        if (this.$dormitories.$invalid) {
          this.$Message.warning('至少添加一个寝室');
          return false
        } else {
          this.$Message.warning('必填项不能为空');
          return false
        }
      } else {
        return true
      }
    }
  }
})
