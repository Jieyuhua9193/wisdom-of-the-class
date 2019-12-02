<template>
 <div id="layout" flex="dir:left">
  <div 
   class="aside"
   :style="asideStyle">
   <logo :menuOpenEnable="menuOpenEnable" />
   <transition 
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="400"
    mode="out-in">
    <i-menu v-if="menuOpenEnable" />
   </transition>
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
import layoutVuex from '@/layout/vuex/common'

export default Vue.extend({
 mixins: [layoutVuex],
 components: {
  Logo,
  iMenu,
  iHeader
 },
 computed: {
  asideStyle():string {
   if ((this as any).menuOpenEnable) {
    return `width:180px;`
   }else{
    return `width:65px;`
   }
  }
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
 width: 180px;
 color: #FFFFFF;
 background: linear-gradient(to right,#2f44ac,#6877c3);
 height: 100vh;
 transition: all .2s ease-in-out;
 transition-delay: .4s
}
#layout .content{
 height: 100vh;
 width: 100%;
 transition: all .2s ease-in-out;
}
</style>