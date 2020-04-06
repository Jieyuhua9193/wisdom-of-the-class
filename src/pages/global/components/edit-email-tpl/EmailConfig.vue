<template>
		<div class="email-config">
				<div class="soft-loading">
						<span class="icon-alert"></span>
						<h2 class="title">配置群发规则</h2>
						<EmailForm />
				</div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'
import EmailForm from './EmailForm.vue'

export default Vue.extend({
  components: {
    EmailForm
  }
})
</script>

<style scoped>
.email-config {
		width: 390px;
		min-width: 390px;
		box-sizing: border-box;
		height: 100vh;
		overflow: auto;
		padding: 20px 20px 140px;
		overflow-y: scroll;
		-ms-overflow-style: none;
		overflow: -moz-scrollbars-none;
}
.email-config::-webkit-scrollbar {
		width: 0 !important;
}
.icon-alert {
		color: orange;
		font-size: 20px;
		vertical-align: top;
		margin-right: 8px;
}
.title {
		display: inline-block;
		color: #000;
}
</style>
