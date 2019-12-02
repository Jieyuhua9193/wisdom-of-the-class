<template>
 <div id="menu" flex="dir:top main:justify">
  <div class="menu-wrap">
   <menu-main />
   <Menu 
    theme="light"
    :width="menuWidth"
    :accordion="true">
    <Submenu name="4">
     <template slot="title">
      <span class="icon icon-icon-manager-common-hot"></span>
      活动管理
     </template>
     <MenuItem name="4-1">子菜单</MenuItem>
     <MenuItem name="4-2">子菜单</MenuItem>
     <MenuItem name="4-3">子菜单</MenuItem>
     <MenuItem name="4-4">子菜单</MenuItem>
    </Submenu>
    <Submenu name="5">
     <template slot="title">
      <span class="icon icon-settings"></span>
      系统设置
     </template>
     <MenuItem name="5-3">子菜单</MenuItem>
     <MenuItem name="5-4">子菜单</MenuItem>
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

export default Vue.extend({
 mixins: [layoutVuex],
 components: {
  menuMain
 },
 computed: {
  menuWidth(): number{
   if ((this as any).menuOpenEnable) {
    return 180;
   } else {
    return 65;
   }
  }
 }
});
</script>

<style scoped>
#menu {
 height: 100%;
 width: 100%;
}
#menu .exit {
 height: 49px;
 width: 100%;
 color: rgba(255, 255, 255, 0.8);
 cursor: pointer;
 background: linear-gradient(to top,#2f44ac,#6877c3);
 position: absolute;
 bottom: 0;
 z-index: 9999;
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