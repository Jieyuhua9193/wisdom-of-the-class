<template>
		<div class="search-bar">
    <span class="search-wrap">
      <Input
		      search
		      placeholder="模糊搜搜"
		      class="input-radius"
		      @on-search="onSearch"/>
    </span>
				<span class="switch">
						<iSwitch
								size="large"
								true-color="#128BF1"
								false-color="#6159Eb"
								@on-change="onUserTypeChange">
		      <span slot="open">老师</span>
		      <span slot="close">学生</span>
		    </iSwitch>
    </span>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    onSearch(value: String) {
      this.$emit('onSearch', value)
    },
    onUserTypeChange(enable: boolean) {
      let userType: number = enable ? 2 : 1;
      this.$store.commit('UPDATE_CLASS_USER_TYPE', userType)
    }
  }
})
</script>

<style scoped>
.search-bar {
		min-width: 1080px;
}
.search-wrap {
		width: 300px;
		display: inline-block;
}
.switch {
		height: 100%;
		margin-left: 20px;
}
.input-radius >>> .ivu-input {
		border-radius: 30px;
		padding-left: 20px;
}
</style>
