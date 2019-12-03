<template>
 <div id="menu" flex="dir:top">
  <div 
   class="menu-wrap" 
   :style="{width:menuWidth+'px'}">
   <menu-main />
   <Menu 
    theme="light"
    :width="menuWidth"
    :accordion="true">
    <Submenu
     v-for="(menu,index) in Menu"
     :key="index"
     :name="menu.name">
     <template slot="title">
      <span 
      class="icon"
      :class="menu.icon"></span>
      {{menu.alias}}
     </template>
     <MenuItem
     v-for="(menuItem,index) in menu.children"
     :key="index"
     :name="menuItem.name"
     :to="menuItem.path">
     {{menuItem.alias}}
     </MenuItem>
    </Submenu>
   </Menu>
  </div>
  <div class="exit" flex="main:center cross:center">
   <span class="icon icon-logout"></span>
   <span>退出</span>
  </div>
 </div>
</template>

<script lang="ts">
import Vue from 'vue';
import menuMain from '@/layout/aside/menuMain.vue'
import layoutVuex from '@/layout/vuex/common'
import { Menu } from '@/common/models/menu'

export default Vue.extend({
 mixins: [layoutVuex],
 components: {
  menuMain
 },
 data () {
  return {
   Menu
  }
 },
 computed: {
  menuWidth(): string{
   if ((this as any).menuOpenEnable) {
    return '180';
   } else {
    return '65';
   }
  }
 }
});
</script>

<style scoped>
#menu {
 width: 100%;
 height: 100%;
}
#menu .exit {
 height: 49px;
 width: 100%;
 color: rgba(255, 255, 255, 0.8);
 cursor: pointer;
 background: linear-gradient(to top,#2f44ac,#6877c3);
 position: absolute;
 bottom: 0;
 /* z-index: 9999; */
}
.icon{
 margin-right: 5px;
 font-size: 14px;
 vertical-align: middle;
}
#menu .exit:hover {
 background: rgba(255, 255, 255, 0.1);
 color: #FFFFFF;
}
</style>