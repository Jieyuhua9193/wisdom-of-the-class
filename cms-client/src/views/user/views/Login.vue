<template>
 <div id="login">
  <div class="content"></div>
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
 
})
</script>

<style scoped>
#login {
 width: 100%;
 height: 100%;
 background: url('~image/system/login_bg.svg');
 background-size: cover;
 background-position: bottom center;
 background-repeat: no-repeat;
}
#login .content{
 width: 1000px;
 height: 600px;
 background: url('~image/system/login_content.svg');
 background-size: cover;
 background-position: center center;
 background-repeat: no-repeat;
 box-shadow: 3px 3px 3px rgba(95, 60, 181, 0.3);
 position: absolute;
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
 margin: auto;
}
</style>