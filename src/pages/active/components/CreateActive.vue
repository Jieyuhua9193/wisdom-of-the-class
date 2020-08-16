<template>
		<div class="create-wrap">
				<div class="form">
						<div class="field-item">
								<span class="label">活动名称：</span>
								<Input
										class="input"
										v-model="formData.name"
										placeholder="请填写"/>
						</div>
						<div class="field-item">
								<span class="label">活动描述：</span>
								<Input
										class="input"
										v-model="formData.desc"
										maxlength="200"
										show-word-limit
										type="textarea"
										placeholder="请填写"/>
						</div>
						<div class="field-item">
								<span class="label">活动级别：</span>
								<Input
										class="input"
										v-model="formData.leave"
										placeholder="请填写"/>
						</div>
						<div class="field-item">
								<span class="label">报名开始时间：</span>
								<DatePicker
										v-model="formData.bookingAt"
										type="datetime"
										placeholder="请选择"
										style="width: 200px"/>
						</div>
						<div class="field-item">
								<span class="label">报名结束时间：</span>
								<DatePicker
										v-model="formData.bookingEnd"
										type="datetime"
										placeholder="请选择"
										style="width: 200px"/>
						</div>
						<div class="field-item">
								<span class="label">活动开始时间：</span>
								<DatePicker
										v-model="formData.startAt"
										type="datetime"
										placeholder="请选择"
										style="width: 200px"/>
						</div>
						<div class="field-item">
								<span class="label">活动结束时间：</span>
								<DatePicker
										v-model="formData.endAt"
										type="datetime"
										placeholder="请选择"
										style="width: 200px"/>
						</div>
						<div class="field-item">
								<span class="label">活动人数：</span>
								<InputNumber v-model="formData.number"/>
						</div>
						<div class="field-item">
								<span class="label">奖励德育分：</span>
								<InputNumber v-model="formData.score"/>
						</div>
						<div class="field-item-c">
								<span class="label">活动图片：</span>
								<span class="prompt">上传一张活动图片，建议640像素*640像素</span>
								<div class="upload-wrap">
										<div
												class="review"
												v-if="avatarReviewURL">
												<div
														@click="delImg"
														class="mask">
														<Icon type="ios-trash"/>
												</div>
												<img :src="avatarReviewURL" alt="" class="avatar">
										</div>
										<Upload
												v-else
												ref="upload"
												:show-upload-list="false"
												:on-success="handleSuccess"
												:before-upload="handleUpload"
												:data="uploadParams"
												:format="['jpg','jpeg','png']"
												type="drag"
												action="//upload.qiniu.com"
												style="display: inline-block;width:58px;">
												<div class="upload">
														<Icon type="ios-camera" size="20"></Icon>
												</div>
										</Upload>
								</div>
						</div>
						<div class="field-item">
								<span class="label">活动详情：</span>
								<Input
										class="input"
										v-model="formData.detail"
										maxlength="200"
										show-word-limit
										type="textarea"
										placeholder="请填写"/>
						</div>
				</div>
				<div class="footer">
						<Button
								type="primary"
								class="btn"
						  @click="onConfirm">确定
						</Button>
						<Button
								class="btn"
								@click="$emit('cancel')">取消
						</Button>
				</div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue';
import commonClick from '@/common/apis';

export default Vue.extend({
  data() {
    return {
      uploadParams: {
        token: null,
        key: ''
      },
      key: '',
      avatarReviewURL: '',
      formData: {
        name: '',
        desc: '',
        detail: '',
        imgs: [],
        leave: '',
        number: 0,
        score: 0,
        bookingAt: null,
        bookingEnd: null,
        startAt: null,
        endAt: null
      }
    }
  },
  mounted() {
    const key = new Date().getTime();
    this.key = `class/active/${key}`;
    commonClick.getQiniuToken({
      key: this.key
    }).success(r => {
      this.uploadParams.token = r.token
    });
  },
  methods: {
    handleUpload(e: any) {
      this.uploadParams.key = this.key;
    },
    handleSuccess(request: any, file: any, list: any) {
      const time = new Date();
      this.avatarReviewURL = `http://cms.jieyuhua.top/${request.key}?${time}`;
      this.formData.imgs[0] = `http://cms.jieyuhua.top/${request.key}`;
    },
    delImg() {
      this.formData.imgs = [];
      this.avatarReviewURL = null
    },
    onConfirm() {
      this.$emit('onCreate', this.formData)
    },
  }
})
</script>

<style scoped>
.create-wrap {
		padding: 30px 40px 40px 40px;
}
.create-wrap .form {
		padding-top: 15px;
}
.form .field-item {
		margin-bottom: 30px;
		display: flex;
		flex-direction: row;
		align-items: center;
}
.field-item-c {
		margin-bottom: 30px;
}
.form .label {
		margin-right: 10px;
}
.form .input {
		width: 300px;
}
.prompt {
		font-size: 12px;
		color: #999;
}
.upload-wrap {
		margin-top: 10px;
		padding-left: 70px;
}
.upload {
		width: 58px;
		height: 58px;
		line-height: 56px;
}
.review {
		width: 58px;
		height: 58px;
		line-height: 58px;
		position: relative;
}
.review .mask {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 1;
		cursor: pointer;
		text-align: center;
		font-size: 24px;
		color: rgba(0, 0, 0, 0);
}
.review .mask:hover {
		background: rgba(0, 0, 0, 0.4);
		color: #fff;
}
.review .avatar {
		width: 100%;
		height: 100%;
}
.footer .btn {
		margin-right: 10px;
}
</style>
