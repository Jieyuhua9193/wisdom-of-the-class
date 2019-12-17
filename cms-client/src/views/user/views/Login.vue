<template>
  <div class="#login">
    <div class="title">用户登录</div>
    <Input
    class="item login-input"
    prefix="md-person"
    placeholder="请输入手机号/邮箱"/>
    <Input
    class="item login-input"
    prefix="md-unlock"
    placeholder="请输入密码"/>
    <div class="supplement"
         flex="main:justify cross:center">
      <div class="remember-pwd-check">
        <Checkbox v-model="rememberPwdEnable"/>
        <span class="label">记住密码</span>
      </div>
      <div class="register-link">
        <a href="#">注册账号</a>
      </div>
    </div>
    <div class="verification-wrap">
      <verification/>
    </div>
    <div
    class="footer"
    flex="main:center">
      <div class="login-btn">登录</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import verification from '@/common/components/verification.vue'

export default Vue.extend({
 data() {
  return {
   data() {
    return {
     loginData: {
      username: null,
      password: null
     }
    }
   }
  }
 },
 components: {
  verification
 }
})
</script>

<style scoped>
#login {
  width: 250px;
  margin-top: 100px;
}
#login .title {
  font-size: 20px;
  text-align: center;
  margin-bottom: 40px;
  color: #128Bf1;
}
#login.item {
  height: 50px;
}
.footer {
  padding-top: 20px;
}
.footer .login-btn {
  width: 180px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: #128bf1;
  color: #FFFFFF;
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
.#login .login-input .ivu-input {
  border: none;
  border-bottom: 1px solid #999999;
  border-radius: 0;
  padding: 0 35px;
  box-shadow: none;
}
.#login .login-input .ivu-input:focus {
  border-bottom: 1px solid #128bf1;
}
</style>