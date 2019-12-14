<template>
 <div class="mini-menu">
  <div
   v-for="(menu,index) in mainMenu"
   :key="index">
   <Tooltip 
    :content="menu.alias"
    :transfer="true"
    placement="right">
    <div 
     class="item"
     :class="{selected:menuSelected.name === menu.name}"
     @click="onMenuClick(menu.name,menu.path)">
     <span class="icon" :class="menu.icon"></span>
    </div>
   </Tooltip>
  </div>
  <div
   class="menu-child"
   :class="{selected:menuSelected.parent === menu.name}"
   v-for="menu in Menu"
   :key="menu.name">
   <Tooltip 
    trigger="click"
    :transfer="true"
    placement="right">
    <div 
     class="item">
     <span class="icon" :class="menu.icon"></span>
    </div>
    <div
     slot="content"
     class="menu-child-item"
     v-for="c_menu in menu.children"
     @click="onMenuClick(c_menu.name,c_menu.path,menu.name)"
     :class="{menuChildSelected:menuSelected.name === c_menu.name}"
     :key="c_menu.name">
     {{c_menu.alias}}
    </div>
   </Tooltip>
  </div>
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mainMenu, Menu } from '@/common/models/menu'
import layoutVuex from '@/layout/vuex/common'

export default Vue.extend({
 mixins: [layoutVuex],
 data () {
  return {
   mainMenu,
   Menu
  }
 },
 methods: {
  onMenuClick(name: string ,path: string, parent?: string){
   this.$store.commit('UPDATE_MENU_SELECTED',{
    name:name,
    parent:parent ? parent:null
   })
   this.$router.push(path)
  }
 }
})
</script>

<style scoped>
.mini-menu {
 position: absolute;
 top: 55px;
}
.item {
 width:65px;
 height: 55px;
 color: rgba(255, 255, 255, 0.8);
 text-align: center;
 line-height: 55px;
 cursor: pointer;
}
.item:hover {
 color: #FFFFFF;
}
.item .icon {
 font-size: 20px;
}
.menu-child-item{
 width: 100px;
 height: 40px;
 line-height: 40px;
 padding-left: 15px;
 font-size: 14px;
 cursor: pointer;
 color: rgba(255, 255, 255, 0.8);
}
.menu-child-item:hover{
 color:#FFFFFF;
 background: linear-gradient(to left, rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.2));
}
.selected {
 background: rgba(255, 255, 255, 0.2);
 color:#FFFFFF;
}
.menuChildSelected{
  background: linear-gradient(to left, rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.2));
 color:#FFFFFF;
}
</style>