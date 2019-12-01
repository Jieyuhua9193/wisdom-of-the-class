<template>
 <div id="header" flex="main:left cross:center ">
  <div class="menu-switch" @click="test = !test">
   <span class="icon icon-alipay" v-if="test"></span>
   <span class="icon icon-analyze" v-else></span>
  </div>
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
 data () {
  return {
   test:false
  }
 }
})
</script>

<style scoped>
#header{
 height: 55px;
 color: #FFFFFF;
 background: #1d1e23;
 width: 100%;
}
.menu-switch{
 width: 55px;
 height: 55px;
 line-height: 55px;
 text-align: center;
 cursor: pointer;
}
.menu-switch:hover{
 background: #515a6e;
}
.menu-switch .icon{
 font-size: 18px;
}
</style>