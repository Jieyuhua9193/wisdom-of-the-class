<template>
 <div id="layout" flex="dir:left">
  <div class="aside" flex="dir:top">
   <logo />
   <i-menu />
  </div>
  <div class="content">
   <i-header />
   <div class="views"></div>
  </div>
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from './aside/logo.vue'
import iMenu from './aside/menu.vue'
import iHeader from './header/index.vue'

export default Vue.extend({
 components: {
  Logo,
  iMenu,
  iHeader
 }
})
</script>

<style scoped>
#layout{
 width: 100%;
 height: 100%;
}
#layout .aside{
 position: relative;
 max-width: 180px;
 overflow: hidden;
 color: #FFFFFF;
 background: #1d1e23;
 height: 100vh;
}
#layout .content{
 height: 100vh;
 width: 100%;
}
</style>