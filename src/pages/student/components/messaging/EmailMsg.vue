<template>
		<div class="email-msg-wrap">
				<div class="soft-lading">
						<span class="icon-icon-manager-common-hot icon"></span>
						<span>挑选一套合适的模板邮件，根据系统提示，群发消息</span>
				</div>
				<div class="tpl-wrap">
						<EmailTpl/>
						<EmailTpl/>
						<EmailTpl/>
						<EmailTpl/>
						<EmailTpl/>
						<EmailTpl/>
						<EmailTpl/>
						<EmailTpl/>
						<EmailTpl/>
						<EmailTpl/>
				</div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'
import EmailTpl from './EmailTpl.vue'

export default Vue.extend({
  components: {
    EmailTpl
  }
})
</script>

<style scoped>
.soft-lading {
		background: #f8f8f8;
		padding: 10px;
		width: 400px;
		margin-top: 10px;
		border-radius: 5px;
}
.soft-lading .icon {
		color: red;
		margin-right: 5px;
		vertical-align: top;
}
.tpl-wrap {
		padding: 10px;
		height: 450px;
		overflow-y: scroll;
		-ms-overflow-style: none;
		overflow: -moz-scrollbars-none;
}
.tpl-wrap::-webkit-scrollbar {
		width: 0 !important;
}
</style>
