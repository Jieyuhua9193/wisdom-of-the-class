<template>
		<div class="avatar-wrap">
				<!--      <span class="class-name">{{className}}班，控制台</span>-->
				<div class="link-group">
						<a class="btn">审批</a>
						<a class="btn">工单</a>
				</div>
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
.link-group {
		margin-right: 10px;
		display: inline-block;
}
.link-group .btn {
		margin-right: 10px;
		font-size: 14px;
		vertical-align: middle;
		padding: 8px 15px;
		user-select: none;
}
.link-group .btn:hover {
		color: #fff;
		background: #128bf1;
		border-radius: 5px;
}
</style>
