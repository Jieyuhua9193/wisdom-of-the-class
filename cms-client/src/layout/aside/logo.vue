<template>
 <div 
  class="logo" 
  flex="main:center cross:center"
  :style="logoStyle">
  <h3>智慧班级</h3>
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
 props: {
  menuOpenEnable:{
   type: Boolean,
   default:null
  }
 },
 computed: {
  logoStyle(){
   if (this.menuOpenEnable) {
    return `width:180px`;
   }else {
    return `width:65px`;
   }
  }
 }
})
</script>

<style scoped>
.logo {
 width: 180px;
 height: 55px;
 background: linear-gradient(to right,#2f44ac,#6877c3);
 border-bottom: 1px solid #6877c357;
 transition: all .2s ease-in-out;
 transition-delay: .2s;
}
</style>