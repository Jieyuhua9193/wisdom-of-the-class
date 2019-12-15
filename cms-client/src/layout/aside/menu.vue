<template>
 <div id="menu">
  <Menu 
   width="auto"
  :accordion="true"
  :class="menuitemClass"
  :active-name="menuSelected.name"
  :open-names="[menuSelected.parent]"
  @on-select="onMenuClick"
  @on-open-change="onMenuOpen">
   <MenuItem
    v-for="menu in mainMenu"
   :key="menu.name"
   :name="menu.name"
   :to="menu.path"
   :active-name="menuSelected.name">
    <span 
     class="menu-item-icon"
    :class="menu.icon"></span>
    <span 
     class="menu-item-name">
     {{menu.alias}}</span>
   </MenuItem>
   <Submenu
    v-for="menu in Menu"
   :class="{menuitemClass,'menu-open':isOpendMenu(menu.name)}"
   :key="menu.name"
   :name="menu.name">
    <template 
     slot="title">
     <span 
      class="menu-item-icon"
     :class="menu.icon"></span>
     <span 
      class="menu-item-name">
      {{menu.alias}}</span>
    </template>
    <div :style="menuOptionStyle">
     <MenuItem
      v-for="menuItem in menu.children"
     :key="menuItem.name"
     :to="menuItem.path"
     :name="menuItem.name">
      <span 
       class="menu-item-name">
       {{menu.alias}}</span>
     </MenuItem>
    </div>
   </Submenu>
  </Menu>
 </div>
</template>

<script lang="ts">
import Vue from 'vue';
import layoutVuex from '@/layout/vuex/common';
import { mainMenu, Menu } from '@/common/models/menu';

export default Vue.extend({
 mixins: [layoutVuex],
 data() {
  return {
   Menu,
   mainMenu,
   opendMenu: ''
  };
 },
 computed: {
  menuitemClass(): Array<string> {
   return ['menu-item', (this as any).menuOpenEnable ? '' : 'collapsed-menu'];
  },
  menuOptionStyle(): string {
   return (this as any).menuOpenEnable ? '' : 'height:0;overflow:hidden;';
  }
 },
 methods: {
  onMenuClick(name: string, parent:string) {
   console.log(name,parent); 
   mainMenu.forEach(r => {
    if (r.name === name) {
     this.opendMenu = ''
    }
   });
  },
  onMenuOpen(parent:string){
   this.opendMenu = parent[0]
   this.$store.commit('UPDATE_MENU_OPEN_ENABLE', true)
  },
  isOpendMenu(name: string){
   if (name === this.opendMenu && !(this as any).menuOpenEnable) {
    return true
   }
   return false
  }
 }
});
</script>

<style scoped>
.menu-item .menu-item-name {
 display: inline-block;
 overflow: hidden;
 width: 69px;
 text-overflow: ellipsis;
 white-space: nowrap;
 vertical-align: bottom;
 transition: width 0.3s ease 0.3s;
 padding-left: 10px;
}
.menu-item .menu-item-icon {
 display: inline-block;
 transform: scale(1);
 transition: all 0.1s ease;
 vertical-align: middle;
}
.collapsed-menu .menu-item-name {
 display: inline-block;
 overflow: hidden;
 width: 0;
 text-overflow: ellipsis;
 white-space: nowrap;
 vertical-align: bottom;
 transition: width 0.2s ease 0.2s;
}
.collapsed-menu .menu-item-icon {
 display: inline-block;
 transform: scale(1.3);
 transition: transform 0.2s ease;
 vertical-align: middle;
}
.ivu-menu-vertical .ivu-menu-item,
.ivu-menu-vertical .ivu-menu-submenu-title {
 padding: 0;
 display: flex;
 padding: 15px 0;
 padding-left: 23px;
 align-items: center;
}
.menu-open {
 color: #6159Eb;
 background:rgba(97, 89, 235, 0.05);
}
</style>

<style>
.collapsed-menu i::before{
 display: none;
}
.ivu-menu-vertical .ivu-menu-item,
.ivu-menu-vertical .ivu-menu-submenu-title {
 padding: 0;
 display: flex;
 padding: 15px 0;
 padding-left: 23px;
 align-items: center;
}
.selected span.menu-item-icon {
 color: #128Bf1;
}
</style>