<template>
  <div id="header" flex="main:justify cross:center">
    <div class="menu-switch" @click="changeMenuStatus">
      <span class="icon icon-menu-left" v-if="menuOpenEnable"></span>
      <span class="icon icon-menu-right" v-else></span>
    </div>
    <avatarCom
      :avatar="classInfo.avatar"
      :className="classInfo.name"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import avatarCom from './avatarCom.vue'
import layoutVuex from '@/layout/vuex/common'

export default Vue.extend({
  props: {
    classInfo: { type: Object }
  },
  mixins: [layoutVuex],
  data() {
    return {
      test: false
    }
  },
  methods: {
    changeMenuStatus() {
      this.$store.commit('UPDATE_MENU_OPEN_ENABLE');
    }
  },
  components: {
    avatarCom
  }
})
</script>

<style scoped>
#header {
  height: 55px;
  color: #FFFFFF;
  /* background: linear-gradient(to right,#128Bf1 , 50% ,#6159Eb); */
  /* background: #36445e; */
  background: #FFFFFF;
  width: 100%;
  padding-right: 30px;
}
.menu-switch {
  width: 55px;
  height: 55px;
  line-height: 55px;
  text-align: center;
  cursor: pointer;
  color: #128Bf1;
}
.menu-switch .icon {
  font-size: 18px;
}
</style>
