<template>
  <div class="search-bar">
    <span class="search-wrap">
      <Input
        search
        placeholder="模糊搜搜"
        class="input-radius"
        @on-search="onSearch"/>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    onSearch(value: String) {
      this.$emit('onSearch', value)
    }
  }
})
</script>

<style scoped>
.search-wrap {
  width: 300px;
  display: inline-block;
}
.input-radius >>> .ivu-input {
  border-radius: 30px;
}
</style>
