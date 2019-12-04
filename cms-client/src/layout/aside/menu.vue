<template>
 <div id="menu" flex="dir:top">
  <div 
   class="menu-wrap" 
   :style="{width:menuWidth+'px'}">
   <menu-main />
   <Menu 
    theme="light"
    :width="menuWidth"
    :accordion="true"
    :active-name="menuSelected.name"
    :open-names="[menuSelected.parent]"
    @on-select="onMenuClick">
    <Submenu
     v-for="menu in Menu"
     :key="menu.name"
     :name="menu.name">
     <template slot="title">
      <span 
      class="icon"
      :class="menu.icon"></span>
      {{menu.alias}}
     </template>
      <MenuItem
       v-for="menuItem in menu.children"
       :key="menuItem.name"
       :to="menuItem.path"
       :name="menuItem.name">
       {{menuItem.alias}}
      </MenuItem>
    </Submenu>
   </Menu>
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
 },
 methods: {
  onMenuClick(name: string){
   let parent:string |null = null;
   Menu.forEach(r => {
    r.children.forEach(c => {
     if (c.name === name) {
      parent = r.name
     }
    })
   })
   this.$store.commit('UPDATE_MENU_SELECTED',{
    name:name,
    parent:parent
   })
  }
 }
});
</script>

<style scoped>
#menu {
 width: 100%;
}
.selected {
 background: rgba(255, 255, 255, 0.2);
 color:#FFFFFF;
}
</style>