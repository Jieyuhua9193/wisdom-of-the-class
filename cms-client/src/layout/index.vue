<template>
 <div id="layout" flex="dir:left">
  <div 
   class="aside"
   :style="asideStyle">
   <logo :menuOpenEnable="menuOpenEnable" />
   <transition 
    enter-active-class="animated bounceInLeft"
    leave-active-class="animated bounceOutLeft"
    :duration="40000">
    <i-menu v-if="menuOpenEnable" />
    <mini-mneu v-else />
   </transition>
  </div>
  <div class="content">
   <i-header />
   <div class="views">
    <router-view />
   </div>
  </div>
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from './aside/logo.vue'
import iMenu from './aside/menu.vue'
import miniMneu from './aside/miniMenu.vue'
import iHeader from './header/index.vue'
import layoutVuex from '@/layout/vuex/common'

export default Vue.extend({
 mixins: [layoutVuex],
 components: {
  Logo,
  iMenu,
  iHeader,
  miniMneu
 },
 computed: {
  asideStyle():string {
   if ((this as any).menuOpenEnable) {
    return `flex:0 0 180px;`
   }else{
    return `flex:0 0 65px;`
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
 width: 180px;
 position: relative;
 color: #FFFFFF;
 background: linear-gradient(to right,#2f44ac,#6877c3);
 height: 100%;
 transition: all .2s ease-in-out;
 transition-delay: .2s;
 overflow-x: hidden;
}
#layout .content{
 height: 100%;
 width: 100%;
 transition: all .2s ease-in-out;
 transition-delay: .2s;
}
</style>