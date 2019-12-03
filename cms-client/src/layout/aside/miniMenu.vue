<template>
 <div class="mini-menu">
  <div
   v-for="(menu,index) in mainMenu"
   :key="index">
   <Tooltip 
    :content="menu.alias"
    placement="right">
    <div class="item main-menu">
     <span class="icon" :class="menu.icon"></span>
    </div>
   </Tooltip>
  </div>
  <div class="item menu">
   <span class="icon"></span>
  </div>
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mainMenu, Menu } from '@/common/models/menu' 

export default Vue.extend({
 data () {
  return {
   mainMenu,
   Menu
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
 line-height: 65px;
 cursor: pointer;
}
.item:hover {
 color: #FFFFFF;
}
.item .icon {
 font-size: 20px;
}
</style>