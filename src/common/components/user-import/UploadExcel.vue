<template>
		<div class="upload-excel">
				<div class="excel-uploader">
						<div class="example-btn">
								<file-upload
										class="btn btn-primary"
										:post-action="uploadUrl"
										extensions="xlsx, xls"
										accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
										:size="1024 * 1024 * 10"
										v-model="files"
										:drop="true"
										:drop-directory="false"
										@input-filter="inputFilter"
										@input-file="inputFile"
										ref="upload">
										<div class="text-wrap">
												<p>点击选择或拖动文件到虚线框</p>
												<p>上传前请按照模板文件制作Excel数据</p>
										</div>
								</file-upload>
						</div>
				</div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    confirmText: {
      type: String,
      default: '确定导入'
    },
    uploadUrl: {
      type: String,
      default: 'http://localhost:8088/user/importUsers'
    }
  },
  data() {
    return {
      files: [],
    };
  },
  methods: {
    inputFilter(newFile: any, oldFile: any, prevent: any) {
      if (newFile && !oldFile) {
        // Before adding a file
        // 添加文件前
        // Filter system files or hide files
        // 过滤系统文件 和隐藏文件
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent();
        }
        // Filter php html js file
        // 过滤 php html js 文件
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent();
        }
      }
    },
    inputFile(newFile: any, oldFile: any) {
      console.log(newFile);
      console.log(oldFile);
      (this.$refs.upload as any).active = true;
      if (newFile && oldFile && newFile.active !== oldFile.active) {
        if (typeof newFile.response === 'string' &&
          newFile.response.indexOf('error') !== -1) {
          this.$Message.destroy();
          this.$Message.error('上传的文件格式错误');
        } else {
          this.$Message.info({
            content: '正在上传文件...',
            duration: 1000000,
          });
        }
      }
      if (newFile && newFile.response && newFile.response.result) {
        (this.$refs.upload as any).active = false;
        this.$Message.destroy();
        this.$emit('success', newFile.response.result);
      }
    }
  },
});
</script>

<style scoped>
.excel-uploader {
		width: 391px;
		background: #F0F0F0;
		border: 1px dashed #BBB9B8;
		text-align: center;
		margin-top: 10px;
		border-radius: 5px;
}

.upload-excel {
		cursor: pointer;
}
</style>

<style>
.upload-excel .excel-uploader:hover {
		background: #EEEBE7;
}
.text-wrap {
		margin-top: 80px;
}
</style>



