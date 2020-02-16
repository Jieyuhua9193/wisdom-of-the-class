<template>
  <div
    class="create_header"
    flex="main:justify cross:center">
    <div class="left">
      <div class="create-icon">
        <span class="icon-house"></span>
      </div>
      <div class="prompt">
        <h2 class="title">创建/加入智慧班级</h2>
        <span class="text">完善个人信息，创建/加入班级</span>
      </div>
    </div>
    <div class="right">
      <span class="email">{{userEmail}}</span>
      <a @click="exit">退出</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Cookies from 'js-cookie';

export default Vue.extend({
  props: {
    userEmail: {
      type: String,
      default: null
    }
  },
  methods: {
    exit() {
      Cookies.remove('wisdom_of_class_token');
    }
  }
})
</script>

<style scoped>
.create_header {
  margin-bottom: 25px;
}
.create-icon {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #dcdcdc;
  line-height: 46px;
  text-align: center;
  color: #000;
  font-size: 26px;
  display: inline-block;
  vertical-align: super;
}
.prompt {
  display: inline-block;
  margin-left: 20px;
  line-height: 20px;
}
.title {
  color: #000;
  font-size: 19px;
}
.right .email, a {
  display: inline;
}
.text {
  color: #666;
}
.email {
  color: #333;
  margin-right: 10px;
}
</style>
