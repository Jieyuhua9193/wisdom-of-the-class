<template>
  <div id="layout" flex="dir:left">
    <div
      class="aside"
      :style="asideStyle">
      <logo :menuOpenEnable="menuOpenEnable"/>
      <i-menu/>
      <div
        class="exit"
        :style="asideStyle"
        flex="main:center cross:center">
        <div class="exit__content">
         <span
           class="icon icon-logout"
           :class="{exitMini:!menuOpenEnable}"></span>
          <span v-if="menuOpenEnable">退出</span>
        </div>
      </div>
    </div>
    <div class="content">
      <i-header/>
      <div class="views">
        <h1>智慧班级管理后台</h1>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from './aside/logo.vue'
import iMenu from './aside/menu.vue'
import iHeader from './header/index.vue'
import layoutVuex from '@/layout/vuex/common'

export default Vue.extend({
  mixins: [layoutVuex],
  components: {
    Logo,
    iMenu,
    iHeader
  },
  computed: {
    asideStyle(): string {
      if ((this as any).menuOpenEnable) {
        return `flex:0 0 180px;width:180px;`
      } else {
        return `flex:0 0 65px;width:65px;`
      }
    }
  }
})
</script>

<style scoped>
#layout {
  width: 100%;
  height: 100%;
}
#layout .aside {
  width: 180px;
  position: relative;
  /* background: linear-gradient(to left,#128Bf1, 50% ,#6159Eb); */
  /* background: #36445e; */
  background: #FFFFFF;
  height: 100%;
  transition: all .2s ease-in-out;
  transition-delay: .2s;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-top: 55px;
  padding-bottom: 49px;
}
#layout .aside::-webkit-scrollbar {
  display: none;
}
#layout .content {
  height: 100%;
  width: 100%;
  transition: all .2s ease-in-out;
  transition-delay: .2s;
}
.aside .exit {
  height: 49px;
  width: 180px;
  color: #128bF1;
  cursor: pointer;
  /* background: linear-gradient(to left,#128Bf1, 50% ,#6159Eb); */
  position: fixed;
  bottom: 0;
  z-index: 999;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  transition: all .2s ease-in-out;
  transition-delay: .2s;
}
.aside .exit .icon {
  margin-right: 5px;
  font-size: 14px;
  vertical-align: middle;
}

.aside .exit .exit__content:hover {
  /* background: rgba(255, 255, 255, 0.1); */
  color: #6159Eb;
  transform: scale(1.2);
}
.exitMini {
  transform: scale(1.4);
  transition: all .2s ease-in-out;
}
</style>