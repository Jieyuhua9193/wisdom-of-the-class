<template>
		<div class="user-import">
				<div class="import-box">
						<div class="box-wrap icon-network">
								<dl>
										<dt>数据批量导入</dt>
										<dd>通过Excel导入数据，选择匹配字段后，将数据导入班级。</dd>
								</dl>
								<div class="action">
										<Upload
												action="api/user/importUsers"
												:with-credentials="true"
												:headers="headers"
												:on-progress="onProgress"
												:on-success="onSuccess">
												<Button
														type="primary">导入数据
												</Button>
										</Upload>
								</div>
								<div class="download">
										请选按照模板文件制作Excel数据
										<a href="http://localhost:8088/user/downloadTpl">点击下载导入模板</a>
								</div>
						</div>
				</div>
				<div class="result" v-if="startImport">
						<div class="loading-wrap" v-if="loading">
								<Spin size="large"></Spin>
								<span class="text">导入中...</span>
						</div>
						<div class="content" v-else>
								<span class="icon-yes"></span>
								<p>
										成功导入 <span class="cms-green"> {{successCount}} </span> 条数据
										失败 <span class="cms-red"> {{failCount}} </span> 条
								</p>
								<a @click="startImport = false">继续导入</a>
						</div>
				</div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Cookie from 'js-cookie'

export default Vue.extend({
  data() {
    return {
      headers: {
        token: Cookie.get('wisdom_of_class_token'),
      },
      loading: false,
      startImport: false,
      successCount: 0,
      failCount: 0
    }
  },
  methods: {
    onProgress() {
      this.startImport = true;
      this.loading = true
    },
    onSuccess(response: any, file: object, fileList: object) {
      this.loading = false;
      this.successCount = response.result.count
    }
  }
})
</script>

<style scoped>
.user-import {
		width: 360px;
		position: relative;
}
.import-box {
		background: #eaf0ff;
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
.result {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #f8f8f8;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
}
.result .content {
		margin-top: -100px;
}
.result .content .icon-yes {
		color: green;
		font-size: 40px;
		display: block;
		text-align: center;
}
.result .content p, a {
		display: block;
		line-height: 25px;
		text-align: center;
}
.result .loading-wrap {
		margin-top: -100px;
		text-align: center;
}
.result .loading-wrap .text {
		line-height: 40px;
		color: #128bf1;
}
.cms-green {
		color: green;
}
.cms-red {
		color: red;
}
</style>
