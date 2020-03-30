<template>
		<div class="user-import">
				<div class="import-box" v-if="!showTask">
						<div class="box-wrap icon-network">
								<dl>
										<dt>数据批量导入</dt>
										<dd>通过Excel导入数据，选择匹配字段后，将数据导入班级。</dd>
								</dl>
								<div class="action">
										<Button
												type="primary"
												@click="showTask = true">导入数据
										</Button>
								</div>
								<div class="download">
										请选按照模板文件制作Excel数据
										<a href="http://localhost:8088/user/downloadTpl">点击下载导入模板</a>
								</div>
						</div>
				</div>
				<ImportUsers v-else/>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'
import ImportUsers from './ImportUsers.vue'
import commonClient from '@/common/apis'

export default Vue.extend({
  data() {
    return {
      showTask: false
    }
  },
  methods: {},
  components: {
    ImportUsers
  }
})
</script>

<style scoped>
.import-box {
		background: #eaf0ff;
		float: left;
		width: 360px;
		height: 500px;
		margin-right: 20px;
		margin-bottom: 20px;
		text-align: center;
		cursor: pointer;
}
.import-box:last-child {
		margin-right: 0;
}
.import-box:hover {
		opacity: 0.9;
}
.box-wrap {
		padding-top: 110px;
}
.import-box .box-wrap:before {
		font-size: 40px;
		color: #959595;
}
dl {
		margin-top: 15px;
}
dt {
		font-size: 16px;
		font-weight: bold;
		color: #000;
		margin-bottom: 20px;
}
dd {
		text-align: left;
		width: 240px;
		margin: 0 auto;
}
.action {
		margin-top: 30px;
}
.download {
		color: #999;
		margin-top: 50px;
}
</style>
