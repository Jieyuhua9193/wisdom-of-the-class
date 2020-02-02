<template>
  <div id="login">
    <div class="title">用户登录</div>
    <Input
      class="item login-input"
      :class="{error: $email.$dirty && $email.$invalid}"
      prefix="md-person"
      v-model="loginData.email"
      placeholder="请输入邮箱"/>
    <Input
      class="item login-input"
      :class="{error: $password.$dirty && $password.$invalid}"
      prefix="md-unlock"
      type="password"
      v-model="loginData.password"
      placeholder="请输入密码"/>
    <div
      class="supplement"
      flex="main:justify cross:center">
      <div class="remember-pwd-check">
        <Checkbox v-model="rememberPwd"/>
        <span class="label">记住密码</span>
      </div>
      <div class="register-link">
        <a href="#/user/register">注册账号</a>
      </div>
    </div>
    <div class="verification-wrap">
      <verification
        ref="validation"
        @Finish="isValidated = true"/>
    </div>
    <div
      class="footer"
      flex="main:center">
      <div
        class="login-btn"
        @click="login">登录
      </div>
    </div>
    <Activation
      :msg='activationMsg'
      :show="showActivationModal"
      @close="showActivationModal = false"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import verification from '@/common/components/verification.vue';
import Activation from '../components/Activation.vue';
import userClient from '@/views/user/api';
import userVuex from '@/views/user/vuex/common';
import Cookies from 'js-cookie'
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

export default Vue.extend({
  mixins: [validationMixin, userVuex],
  name: 'login',
  data() {
    return {
      loginData: {
        email: null,
        password: null,
      },
      rememberPwd: false,
      isValidated: false,
      showActivationModal: false,
      activationMsg: ''
    }
  },
  validations: {
    loginData: {
      email: { email, required },
      password: { required }
    }
  },
  components: {
    verification,
    Activation
  },
  mounted() {
    this.init()
  },
  methods: {
    init(): void {
      if ((this as any).passwordInfo) {
        this.rememberPwd = true;
        this.loginData = (this as any).passwordInfo
      }
    },
    login() {
      this.$v.loginData.$touch();
      this.activationMsg = `该账号未激活，我们已经向邮箱${this.loginData.email}发送了激活码，请激活账号后操作`;
      if (this.check()) {
        (this as any).$refs.validation.reset();
        this.$store.commit('SAVE_USER_EMAIL', this.loginData.email);
        this.rememberPwd && this.$store.commit('REMEMBER_PASSWORD', this.loginData);
        this.isValidated = false;
        userClient.login(this.loginData).success(r => {
          Cookies.set('wisdom_of_class_token', r.token, { expires: 20 * (60 * 60 * 1000) });
          this.$store.commit('UPDATE_USER_INFO', r.user);
          if (r.error && r.error === 'NEED_ACTIVATION') {
            this.showActivationModal = true;
          } else if (r.user.role) {
            this.$router.push({ path: '/overview', replace: true })
          } else {
            this.$router.push({ path: '/create', replace: true })
          }
        })
      }
    },
    check(): boolean {
      if ((this.$v.$dirty && this.$v.$invalid) || !this.isValidated) {
        if ((this as any).$email.$invalid) {
          this.$Message.warning('邮箱格式错误');
        } else if ((this as any).$password.$invalid) {
          this.$Message.warning('请输入密码');
        } else if (!this.isValidated) {
          this.$Message.warning('请完成验证');
        }
        return false
      }
      return true
    }
  },
  computed: {
    $email(): object {
      return this.$v.loginData.email
    },
    $password(): object {
      return this.$v.loginData.password
    }
  }
})
</script>

<style scoped>
#login {
  width: 280px;
  margin-top: 100px;
}
#login .title {
  font-size: 20px;
  text-align: center;
  margin-bottom: 40px;
  color: #128Bf1;
}
#login .item {
  height: 50px;
}
.footer {
  padding-top: 30px;
}
.footer .login-btn {
  width: 200px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  background: #128bf1;
  color: #FFFFFF;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
}
.verification-wrap {
  width: 100%;
  height: 40px;
  margin-top: 10px;
}
.footer .login-btn:active {
  transform: scale(0.95);
}
</style>

<style>
#login .login-input .ivu-input {
  border: none;
  border-bottom: 1px solid #999999;
  border-radius: 0;
  padding: 0 35px;
  box-shadow: none;
}
#login .login-input .ivu-input:focus {
  border-bottom: 1px solid #128bf1;
}
.error .ivu-input {
  border-bottom: 1px solid #FF3333 !important;
}
</style>