<template>
		<div class="import-success">
				<h2 class="icon-success">
						数据导入成功
				</h2>
				<div class="success-result">
						<div class="result-wrap">
								<p>
										共处理<em>{{ count }}条</em>数据，成功{{ count }}条数据。
								</p>
						</div>
				</div>
				<div class="action">
						<Button type="primary" @click="toContinue">继续导入</Button>
				</div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    count: {
      type: Number,
      default: 0,
    }
  },
  methods: {
    toContinue() {
      this.$emit('continue');
    }
  }
});
</script>

<style scoped>
.icon-success {
		font-size: 14px;
		color: #000;
}
.icon-success:before {
		font-size: 67px;
		color: #50C700;
		display: block;
		margin-bottom: 15px;
}
.import-success {
		margin: 90px auto;
		text-align: center;
}
.success-result {
		border-radius: 5px;
		width: 750px;
		margin: 30px auto;
}
.success-result em {
		color: #F57323;
		font-style: normal;
}
.result-wrap p {
		line-height: 2.5;
}
</style>
