<template>
		<div class="import-upload">
				<p>
						请选按照模板文件制作Excel数据
						<a href="http://localhost:8088/user/downloadTpl" target="_blank">点击下载模板</a>
				</p>
				<div class="upload-excel">
						<UploadExcel
								:uploadUrl="uploadUrl"
								@success="afterUpload"></UploadExcel>
						<div class="action">
								<a @click="$emit('cancel')">取消导入</a>
						</div>
				</div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue';
import UploadExcel from './UploadExcel.vue';

export default Vue.extend({
  components: {
    UploadExcel,
  },
  data() {
    return {
      uploadUrl: 'http://localhost:8088/user/importUsers',
    };
  },
  methods: {
    afterUpload(result: any) {
      const peek = result.peek.filter((row: string[]) => row.length > 0);
      if (!peek || peek.length < 1) {
        this.$Message.warning('上传的文件格式不正确');
      } else {
        this.$emit('success', result);
      }
    }
  },
});
</script>

<style scoped>
.import-upload {
		margin: 100px auto;
		text-align: center;
		width: 495px;
}
.action {
		margin-top: 20px;
}
.action a {
		color: #999;
}
</style>

<style>
.import-upload .excel-uploader {
		width: 495px;
		height: 216px;
}
</style>
