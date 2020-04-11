<template>
		<div class="com_wrap">
				<div class="switch-wrap">
						<div class="item green">模板邮件群发</div>
						<div class="item gray middle">短信群发</div>
						<div class="item gray">公众号消息群发</div>
				</div>
				<a class="history">
						<span class="icon-booking"></span>
						<span>群发记录</span>
				</a>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.switch-wrap {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		border: 1px solid #ccc;
}
.switch-wrap .item {
		padding: 10px;
		color: #ccc;
		user-select: none;
		cursor: pointer;
}
.switch-wrap .middle {
		border-left: 1px solid #ccc;
		border-right: 1px solid #ccc;
}
.switch-wrap .green {
		color: rgba(95, 195, 13, 1);
		background: rgba(95, 195, 13, 0.1);
}
.switch-wrap .gray {
		cursor:no-drop
}
.history {
		vertical-align: bottom;
		margin-left: 20px;
		user-select: none;
}
.history .icon-booking {
		margin-right: 5px;
}
</style>
