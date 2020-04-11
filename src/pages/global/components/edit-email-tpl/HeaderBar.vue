<template>
		<div class="header-bar">
				<a class="back" @click="$router.go(-1)">
						<span class="icon-back"></span>
						<span>返回重选</span>
				</a>
				<span class="title">{{title}}</span>
				<div class="btn-confirm">
						<a class="btn" @click="$emit('onEmailTaskCreate')">创建群发任务</a>
				</div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    }
  }

})
</script>

<style scoped>
.header-bar {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #383838;
		height: 50px;
		font-size: 14px;
		padding: 0 20px;
		color: #ccc;
}
.header-bar a {
		color: #fff;
}
.header-bar .back, .btn {
		cursor: pointer;
}
.header-bar .btn {
		border-radius: 5px;
		background: #128bf1;
		padding: 10px 15px;
}
.header-bar .back .icon-back {
		margin-right: 8px;
		vertical-align: top;
}
</style>
