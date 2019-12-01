<template>
 <div class="main-menu">
  <div class="item">
   <span class="icon icon-overview"></span>
   <span class="title">概览</span>
  </div>
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
 
})
</script>

<style scoped>
.item {
 color: rgba(255,255,255,.7);
 font-size: 14px;
 padding: 14px 24px;
 position: relative;
 cursor: pointer;
 z-index: 1;
 transition: all .2s ease-in-out
}
.item:hover {
 background: #515a6e;
 color: #FFFFFF;
}
.icon {
 margin-right: 5px;
 font-size: 14px;
 vertical-align: middle;
}
</style>