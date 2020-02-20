<template>
  <FormWrap label="创建班级">
    <div class="create-class">
      <div class="item">
        <span class="label">学校名称：</span>
        <Input
          class="input-large"
          :class="{invalid:$schoolName.$dirty && $schoolName.$invalid}"
          v-model="classInfo.schoolName"
          placeholder="请填写"/>
      </div>
      <div class="item">
        <span class="label">所属院系：</span>
        <Input
          class="input-large"
          :class="{invalid:$department.$dirty && $department.$invalid}"
          v-model="classInfo.department"
          placeholder="请填写"/>
      </div>
      <div class="block">
        <div class="item">
          <span class="label">专业名称：</span>
          <Input
            class="input"
            :class="{invalid:$professional.$dirty && $professional.$invalid}"
            v-model="classInfo.professional"
            placeholder="请填写"/>
        </div>
        <div class="item item-inline">
          <span class="label">班级名称：</span>
          <Input
            class="input"
            :class="{invalid:$name.$dirty && $name.$invalid}"
            v-model="classInfo.name"
            placeholder="请填写"/>
        </div>
      </div>
      <div class="item">
        <span class="label">班级头像：</span>
        <span class="prompt">上传一张具有班级特色的头像，建议640像素*640像素</span>
        <div class="upload-wrap">
          <div
            class="review"
            v-if="classInfo.avatar">
            <div
              @click="delAvatar"
              class="mask">
              <Icon type="ios-trash"/>
            </div>
            <img :src="avatarReviewURL" alt="" class="avatar">
          </div>
          <Upload
            v-else
            ref="upload"
            :class="{error:$avatar.$dirty && $avatar.$invalid}"
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
      <div
        class="dormitories"
        :class="{invalid:$dormitories.$dirty && $dormitories.$invalid}">
        <span class="label">寝室：</span>
        <div
          class="tag-wrap"
          v-for="(tag,index) in classInfo.dormitories"
          :key="index">
          <Tooltip
            theme="light"
            placement="bottom">
            <span
              class="tag"
              :class="{ boy:tag.type ===1,girl:tag.type ===2 }"
            >{{tag.number}}</span>
            <span
              slot="content"
              class="del"
              @click="dormitoryDel(index)">
              <Icon type="md-close"/>
            </span>
          </Tooltip>
        </div>
        <Poptip
          v-model="showAddDormitory"
          placement="bottom">
          <div
            slot="content"
            class="add-dormitories">
            <span class="title">添加寝室</span>
            <div class="add-dormitories-content">
              <RadioGroup v-model="dormitoryType">
                <Radio :label="1" class="radio-item">男寝</Radio>
                <Radio :label="2">女寝</Radio>
              </RadioGroup>
              <Input
                class="input"
                size="small"
                v-model="dormitoryNumber"/>
              <Button
                type="info"
                class="button"
                size="small"
                @click="confirmAddDormitory">确定
              </Button>
            </div>
          </div>
          <Button
            size="small"
            @click.stop="showAddDormitory = true">添加
          </Button>
        </Poptip>
      </div>
      <div class="item">
        <span class="label">班级特色：</span>
        <span class="prompt">介绍一下班级的亮点或愿景呗，非必填项</span>
        <div class="input-area">
          <Input
            v-model="classInfo.features"
            type="textarea"
            :rows="4"
            placeholder="说点什么吧"/>
        </div>
      </div>
    </div>
  </FormWrap>
</template>

<script lang="ts">
import Vue from 'vue';
import FormWrap from './FormWrap.vue';
import commonClick from '@/common/apis';
import classInfoV from '../../validates/ClassInfo';

export default Vue.extend({
  mixins: [classInfoV],
  props: {
    userEmail: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      uploadParams: {
        token: null,
        key: ''
      },
      avatarReviewURL: '',
      showAddDormitory: false,
      dormitoryType: 1,
      dormitoryNumber: null,
      classInfo: {
        schoolName: null,
        department: null,
        name: null,
        avatar: '',
        professional: null,
        features: null, // 班级特色
        dormitories: Array()
      }
    }
  },
  components: {
    FormWrap
  },
  mounted() {
    console.log('请求发起');
    commonClick.getQiniuToken({
      key: `class/avatar/${this.userEmail}`
    }).success(r => {
      this.uploadParams.token = r.token
    });
  },
  methods: {
    confirmAddDormitory() {
      if (this.dormitoryNumber) {
        this.classInfo.dormitories.push({
          type: this.dormitoryType,
          number: this.dormitoryNumber
        });
        this.dormitoryNumber = null;
        this.showAddDormitory = false
      } else {
        this.$Message.warning('请填写寝室号')
      }
    },
    handleUpload(e: any) {
      this.uploadParams.key = `class/avatar/${this.userEmail}`;
    },
    handleSuccess(request: any, file: any, list: any) {
      const time = new Date();
      this.avatarReviewURL = `http://cms.jieyuhua.top/${request.key}?${time}`
      this.classInfo.avatar = `http://cms.jieyuhua.top/${request.key}`;
    },
    delAvatar() {
      this.classInfo.avatar = ''
    },
    dormitoryDel(index: number) {
      this.classInfo.dormitories.splice(index, 1);
    }
  }
})
</script>

<style scoped>
.create-class {
  padding: 10px 20px;
}
.item {
  font-size: 13px;
  margin-bottom: 25px;
  display: inline-block;
  vertical-align: top;
}
.item:last-child {
  margin-bottom: 0;
}
.label {
  color: #333;
}
.item-inline {
  margin-left: 50px;
}
.prompt {
  font-size: 12px;
  color: #999;
}
.input {
  width: 180px;
}
.input-large {
  width: 280px;
}
.dormitories {
  border: 1px solid rgba(0, 0, 0, 0);
  margin-bottom: 10px;
  width: 400px;
  border-radius: 5px;
  margin-top: -15px;
  padding: 10px 10px 10px 26px;
}
.add-dormitories .title {
  font-weight: bold;
  color: #4A4A4A;
}
.add-dormitories-content {
  padding: 10px 5px 10px 5px;
}
.radio-item {
  margin-right: 20px;
}
.add-dormitories .input {
  display: block;
  width: 160px;
  margin-top: 10px;
}
.add-dormitories .button {
  float: right;
  margin-top: 10px;
}
.tag {
  padding: 5px;
  color: #fff;
  border-radius: 5px;
  vertical-align: middle;
  margin-right: 5px;
}
.tag-wrap {
  display: inline-block;
}
.boy {
  background: #2aa7ff;
}
.girl {
  background: #ff54c7;
}
.upload-wrap {
  margin-top: 10px;
  padding-left: 65px;
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
.tag-wrap .del {
  cursor: pointer;
}
.input-area {
  width: 400px;
  margin-top: 10px;
  margin-left: 65px;
}
.input-area >>> textarea {
  font-size: 12px;
}
</style>

<style>
.error .ivu-upload-drag {
  border-color: red !important;
}
</style>
