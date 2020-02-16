<template>
  <div class="form-wrap">
    <div class="form-header">
      <div class="label">{{label}}</div>
    </div>
    <div class="form-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    label: { type: String }
  }
})
</script>

<style scoped>
.form-header {
  color: #000;
  font-weight: bold;
  border-bottom: 1px solid #eee;
  line-height: 30px;
}
.form-body {
  padding: 20px 0;
}
</style>
