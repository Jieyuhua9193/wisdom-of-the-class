<template>
		<div class="import-user">
				<div class="soft-landing-wrap">
						<div class="icon-network soft-landing">
								<h3>数据批量导入</h3>
								<p>通过Excel导入数据，选择匹配字段后，将数据导入班级。</p>
						</div>
				</div>
				<ImportFail
						v-if="failed"
						@restart="onContinue"></ImportFail>
				<ImportSuccess
						v-else-if="succeeded"
						@continue="onContinue"></ImportSuccess>
				<ImportUpload
						@cancel="$emit('cancel')"
						@success="afterUpload"
						v-else></ImportUpload>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'
import ImportSuccess from './ImportSuccess.vue';
import ImportUpload from './ImportUpload.vue';
import ImportFail from './ImportFail.vue';

export default Vue.extend({
  data() {
    return {
      failed: false,
      succeeded: false
    }
  },
  components: {
    ImportSuccess,
    ImportUpload,
    ImportFail
  },
  methods: {
    onContinue() {
    },
    afterUpload() {
    }
  }
})
</script>

<style scoped>
.soft-landing-wrap {
		border-radius: 10px;
		background: #e2eefb;
		padding: 20px 10px;
}
.soft-landing {
		position: relative;
		padding-left: 60px;
}
.soft-landing h3 {
		margin-bottom: 0;
}
.soft-landing:before {
		position: absolute;
		left: 20px;
		top: 2px;
		font-size: 28px;
		color: #959595;
		z-index: 1;
}
</style>
