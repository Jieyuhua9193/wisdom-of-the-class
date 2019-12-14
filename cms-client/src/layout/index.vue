<template>
 <div id="layout" flex="dir:left">
  <div 
    class="aside"
   :style="asideStyle">
   <logo :menuOpenEnable="menuOpenEnable" />
   <transition 
     enter-active-class="animated tsIn"
     leave-active-class="animated tsOut"
    :duration="400">
    <i-menu />
    <!-- <i-menu v-if="menuOpenEnable" /> -->
    <!-- <mini-mneu v-else /> -->
   </transition>
   <div 
      class="exit"
     :style="asideStyle"
      flex="main:center cross:center">
      <span 
       class="icon icon-logout"
      :class="{exitMini:!menuOpenEnable}"></span>
      <span v-if="menuOpenEnable">退出</span>
   </div>
  </div>
  <div class="content">
   <i-header />
   <div class="views">
    <h1>智慧班级管理后台</h1>
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
  // miniMneu
 },
 computed: {
  asideStyle():string {
   if ((this as any).menuOpenEnable) {
    return `flex:0 0 180px;width:180px;`
   }else{
    return `flex:0 0 65px;width:65px;`
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
 background: linear-gradient(to left,#128Bf1, 50% ,#6159Eb);
 height: 100%;
 transition: all .2s ease-in-out;
 transition-delay: .2s;
 overflow-x: hidden;
 overflow-y: scroll;
 padding-top: 55px;
 padding-bottom: 49px;
}
#layout .aside::-webkit-scrollbar {
  display: none;
}
#layout .content{
 height: 100%;
 width: 100%;
 transition: all .2s ease-in-out;
 transition-delay: .2s;
}
.aside .exit {
 height: 49px;
 width: 180px;
 color: rgba(255, 255, 255, 0.8);
 cursor: pointer;
 background: linear-gradient(to left,#128Bf1, 50% ,#6159Eb);
 position: fixed;
 bottom: 0;
 z-index: 999;
 transition: all .2s ease-in-out;
 transition-delay: .2s;
}
.aside .exit .icon{
 margin-right: 5px;
 font-size: 14px;
 vertical-align: middle;
}
.aside .exit:hover {
 background: rgba(255, 255, 255, 0.1);
 color: #FFFFFF;
}
.exitMini{
 transform: scale(1.4);
 transition: all .2s ease-in-out;
}
.tsIn {
 width: 100%;
 transition: all .4s ease-in-out;
}
.tsOut {
 width: 100%;
 transition: all .4s ease-in-out;
}
</style>