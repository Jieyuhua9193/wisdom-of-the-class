<template>
 <div 
  class="logo" 
  flex="main:center cross:center"
  :style="logoStyle">
  <img :src="logoImage" class="logo-image">
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
  },
  logoImage():string {
    if (this.menuOpenEnable) {
    return require(`@/assets/image/logo.svg`);
   }else {
    return require(`@/assets/image/logo-mini.svg`);
   }
  }
 }
})
</script>

<style scoped>
.logo {
 width: 180px;
 height: 55px;
 /* background: linear-gradient(to left,#128Bf1, 40% ,#6159Eb); */
 /* background: #36445e; */
 background: #FFFFFF;
 border-bottom: 1px solid rgba(0, 0, 0, 0.1);
 transition: all .2s ease-in-out;
 transition-delay: .2s;
 position: fixed;
 top: 0;
 z-index: 10;
}
.logo .logo-image {
 width: 50%;
 height: 50%;
}
</style>