<template>
		<div class="import-fail">
				<h2 class="icon-alert">
						数据导入失败
				</h2>
				<p><a @click="$emit('restart')">重新导入</a></p>
		</div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
});
</script>

<style scoped>
.icon-alert:before {
		font-size: 67px;
		color: #FF9F00;
		display: block;
		margin-bottom: 15px;
}
.import-fail {
		margin: 90px auto;
		text-align: center;
}
h2 {
		font-size: 14px;
		margin: 10px auto;
}
</style>
