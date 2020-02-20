<template>
  <div id="register">
    <div class="title">用户注册</div>
    <Input
      v-model="registerData.email"
      :class="{error: $email.$dirty && $email.$invalid}"
      class="item login-input"
      prefix="md-person"
      placeholder="请输入邮箱"/>
    <Input
      v-model="registerData.password"
      :class="{error: $password.$dirty && $password.$invalid}"
      class="item login-input"
      prefix="md-unlock"
      type="password"
      placeholder="请输入密码"/>
    <Input
      v-model="rePassword"
      :class="{error: $rePassword.$dirty && $rePassword.$invalid}"
      class="item login-input"
      prefix="md-unlock"
      type="password"
      placeholder="确认密码"/>
    <div class="login-link">
      <a href="#/user/login">已有账号？点击登录</a>
    </div>
    <div class="verification-wrap">
      <verification @Finish="isValidated = true"/>
    </div>
    <div
      class="footer"
      flex="main:center">
      <div
        class="register-btn"
        @click="register"
      >立即注册
      </div>
    </div>
    <Activation
      :msg='activationMsg'
      :show="showActivationModal"
      @finish="$router.replace('/user/login')"
      @close="showActivationModal = false"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import verification from '@/common/components/verification.vue';
import Activation from '../components/Activation.vue';
import userClient from '@/pages/user/apis'
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

export default Vue.extend({
  mixins: [validationMixin],
  data() {
    return {
      registerData: {
        email: null,
        password: null
      },
      rePassword: null,
      isValidated: false,
      activationMsg: '',
      showActivationModal: false
    }
  },
  validations: {
    registerData: {
      email: { email, required },
      password: { required }
    },
    rePassword: { required }
  },
  components: {
    verification,
    Activation
  },
  methods: {
    register() {
      this.$v.$touch();
      if (this.check()) {
        this.activationMsg = `我们已向您的邮箱${this.registerData.email}发送了一个激活码，请激活后使用。`;
        userClient.register(this.registerData).success(() => {
          this.$store.commit('SAVE_USER_EMAIL', this.registerData.email);
          this.$store.commit('REMEMBER_PASSWORD', this.registerData);
          this.showActivationModal = true;
        });
      }
    },
    check(): boolean {
      if ((this.$v.$dirty && this.$v.$invalid) || !this.isValidated) {
        if ((this as any).$email.$invalid) {
          this.$Message.warning('邮箱格式错误');
        } else if ((this as any).$password.$invalid) {
          this.$Message.warning('请输入密码');
        } else if ((this as any).$rePassword.$invalid) {
          this.$Message.warning('请再次输入密码');
        } else if (this.registerData.password !== this.rePassword) {
          this.$Message.warning('两次密码输入不一致，请重试');
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
      return this.$v.registerData.email
    },
    $password(): object {
      return this.$v.registerData.password
    },
    $rePassword(): object {
      return this.$v.rePassword
    }
  },
})
</script>

<style scoped>
#register {
  width: 280px;
  margin-top: 100px;
}
#register .title {
  font-size: 20px;
  text-align: center;
  margin-bottom: 40px;
  color: #128Bf1;
}
#register .item {
  height: 50px;
}
#register .login-link {
  text-align: right;
}
.footer {
  padding-top: 30px;
}
.footer .register-btn {
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
  margin-top: 20px;
}
.footer .register-btn:active {
  transform: scale(0.95);
}
</style>

<style>
#register .login-input .ivu-input {
  border: none;
  border-bottom: 1px solid #999999;
  border-radius: 0;
  padding: 0 35px;
  box-shadow: none;
}
#register .login-input .ivu-input:focus {
  border-bottom: 1px solid #128bf1;
}
.error .ivu-input {
  border-bottom: 1px solid #FF3333 !important;
}
</style>
