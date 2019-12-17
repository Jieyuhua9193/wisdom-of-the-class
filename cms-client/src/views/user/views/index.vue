<template>
  <div id="user">
    <div class="content">
      <div class="logo">
        <img src="@/assets/image/logo.svg"/>
      </div>
      <div class="body">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped>
#user {
  width: 100%;
  height: 100%;
  background-image: url('//cms.jieyuhua.top/system/login_bg.svg');
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
#user .content {
  width: 1000px;
  height: 600px;
  background-image: url('//cms.jieyuhua.top/system/login_content.svg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  box-shadow: 3px 3px 3px rgba(95, 60, 181, 0.3);
}
#user .content .logo {
  width: 100px;
  position: relative;
  top: 40px;
  left: 50px;
}
#user .content .logo img {
  width: 100%;
  height: 100%;
}
#user .content .body {
  padding-left: 80px;
}
</style>