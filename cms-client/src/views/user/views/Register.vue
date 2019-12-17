<template>
  <div id="register">
    <div class="title">用户注册</div>
    <Input
      class="item login-input"
      prefix="md-person"
      placeholder="请输入手机号/邮箱"/>
    <Input
      class="item login-input"
      prefix="md-unlock"
      type="password"
      placeholder="请输入密码"/>
    <Input
      class="item login-input"
      prefix="md-unlock"
      type="password"
      placeholder="确认密码"/>
    <div class="login-link">
      <a href="#/user/login">已有账号？点击登录</a>
    </div>
    <div class="verification-wrap">
      <verification/>
    </div>
    <div
      class="footer"
      flex="main:center">
      <div class="register-btn">立即注册</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import verification from '@/common/components/verification.vue'

export default Vue.extend({
  components:{
    verification
  }
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
</style>