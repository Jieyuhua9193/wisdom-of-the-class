<template>
  <div class="avatar-wrap">
      <span class="class-name">{{className}}班，控制台</span>
    <Avatar
      size="large"
      :src="avatar"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import layoutVuex from '@/layout/vuex/common'

export default Vue.extend({
  mixins: [layoutVuex],
  props: {
    avatar: { type: String },
    className: { type: String }
  },
  data() {
    return {
      test: false
    }
  }
})
</script>

<style scoped>
.class-name {
  color: #6159EB;
  font-size: 13px;
  font-weight: bold;
  margin-right: 10px;
  position: relative;
  top: 2px;
}
</style>
