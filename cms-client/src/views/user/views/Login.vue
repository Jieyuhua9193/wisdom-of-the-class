<template>
 <div id="login">
  <div class="content">
   <div class="logo">
    <img src="@/assets/image/logo.svg" />
    <div class="form-box">
     <div class="title">用户登录</div>
     <Input 
      class="item login-input"
      prefix="md-person"
      placeholder="请输入手机号/邮箱" />
     <Input 
      class="item login-input"
      prefix="md-unlock"
      placeholder="请输入密码" />
     <div 
      class="supplement"
      flex="main:justify cross:center">
      <div class="remember-pwd-check">
       <Checkbox v-model="rememberPwdEnable" />
       <span class="label">记住密码</span>
      </div>
      <div class="register-link">
       <a href="#">注册账号</a>
      </div>
     </div>
     <div 
      class="footer"
      flex="main:center">
      <div class="login-btn">登录</div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
 data () {
  return {
   data () {
    return {
     loginData:{
      username: null,
      password: null
     }
    }
   }
  }
 }
})
</script>

<style scoped>
#login {
 width: 100%;
 height: 100%;
 background-image: url('http://cms.jieyuhua.top/system/login_bg.svg');
 background-size: cover;
 background-position: bottom center;
 background-repeat: no-repeat;
 overflow: scroll;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
}
#login .content {
 width: 1000px;
 height: 600px;
 background-image: url('http://cms.jieyuhua.top/system/login_content.svg');
 background-size: cover;
 background-position: center center;
 background-repeat: no-repeat;
 box-shadow: 3px 3px 3px rgba(95, 60, 181, 0.3);
}
#login .content .logo {
 width: 100px;
 position: relative;
 top: 40px;
 left: 50px;
}
#login .content .logo img {
 width: 100%;
 height: 100%;
}
.form-box {
 width: 250px;
 margin-top: 100px;
}
.form-box .title {
 font-size: 20px;
 text-align: center;
 margin-bottom: 40px;
 color: #128Bf1;
}
.form-box .item {
 height: 50px;
}
.footer {
 padding-top: 35px;
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
.footer .login-btn:active {
 transform: scale(0.95);
}
</style>

<style>
.form-box .login-input .ivu-input {
 border: none;
 border-bottom: 1px solid #999999;
 border-radius: 0;
 padding: 0 35px;
 box-shadow: none;
}
.form-box .login-input .ivu-input:focus {
 border-bottom: 1px solid #128bf1;
}
</style>