<template>
		<div class="email-config">
				<div class="soft-loading">
						<span class="icon-alert"></span>
						<h2 class="title">配置群发规则</h2>
				</div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.email-config {
		width: 600px;
		padding: 20px;
		box-sizing: border-box;
}
.icon-alert {
		color: orange;
		font-size: 20px;
		vertical-align: top;
		margin-right: 8px;
}
.title {
		display: inline-block;
}
</style>
