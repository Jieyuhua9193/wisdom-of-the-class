<template>
 <div class="main-menu">
  <div 
   class="item" 
   v-for="(menu,index) in mainMenu"
   :key="index"
   @click="onMenuClick(menu.name,menu.path)">
   <span 
    class="icon" 
   :class="menu.icon"></span>
   <span class="title">{{menu.alias}}</span>
  </div>
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mainMenu } from '@/common/models/menu'

export default Vue.extend({
 data () {
  return {
   mainMenu
  }
 },
 methods: {
  onMenuClick(name: string ,path: string ){
   this.$router.push(path)
  }
 }
})
</script>

<style scoped>
.item {
 color: rgba(255, 255, 255, 0.8);
 font-size: 14px;
 padding: 14px 24px;
 position: relative;
 cursor: pointer;
 z-index: 1;
 background: linear-gradient(to right,#2f44ac,#6877c3);
 transition: all .2s ease-in-out
}
.item:hover {
 background: rgba(255, 255, 255, 0.1);
 color: #FFFFFF;
}
.icon {
 margin-right: 8px;
 font-size: 14px;
 vertical-align: middle;
}
.selected {
 background: rgba(199, 99, 99, 0.3);
 color: #FFFFFF;
}
</style>