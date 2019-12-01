<template>
 <div id="menu" flex="dir:top main:justify">
  <div class="menu-wrap">
   <menu-main />
   <Menu 
    theme="dark"
    width="180px"
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

export default Vue.extend({
 components: {
  menuMain
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
 color: #999999;
 cursor: pointer;
 border-top: 1px solid #101117;
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