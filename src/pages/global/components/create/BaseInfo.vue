<template>
  <FormWrap label="基本信息">
    <div class="base-info">
      <div class="item">
        <span class="label">真实姓名：</span>
        <Input
          class="input"
          :class="{invalid:$realName.$dirty && $realName.$invalid}"
          v-model="baseInfo.realName"
          placeholder="请填写"/>
      </div>
      <div class="item item-inline">
        <span class="label">昵称：</span>
        <Input
          class="input"
          v-model="baseInfo.nickName"
          placeholder="常用称号"/>
      </div>
      <div class="item">
        <span class="label">联系电话：</span>
        <Input
          class="input"
          :class="{invalid:$phoneNumber.$dirty && $phoneNumber.$invalid}"
          v-model="baseInfo.phoneNumber"
          placeholder="请填写"/>
        <p class="prompt phone-prompt">常用的联系电话</p>
      </div>
      <div class="item item-inline">
        <span class="label">QQ：</span>
        <Input
          class="input"
          :class="{invalid:$qq.$dirty && $qq.$invalid}"
          v-model="baseInfo.qq"
          placeholder="请填写常用QQ"/>
      </div>
    </div>
  </FormWrap>
</template>

<script lang="ts">
import Vue from 'vue';
import FormWrap from './FormWrap.vue';
import BaseInfoV from '../../validates/BaseInfo'

export default Vue.extend({
  mixins: [BaseInfoV],
  data() {
    return {
      baseInfo: {
        nickName: null,
        phoneNumber: null,
        realName: null,
        qq: null
      }
    }
  },
  components: {
    FormWrap
  }
  // watch: {
  //   baseInfo: {
  //     handler() {
  //       console.log("监听到了变化 ", this.baseInfo);
  //     },
  //     deep: true
  //   }
  // }
})
</script>

<style scoped>
.base-info {
  padding: 10px 20px 0 20px;
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
  width: 70px;
  display: inline-block;
  text-align: right;
}
.item-inline {
  margin-left: 50px;
}
.nick-prompt {
  margin-left: 40px;
  margin-top: 5px;
}
.phone-prompt {
  margin-left: 65px;
  margin-top: 5px;
}
.prompt {
  font-size: 12px;
  color: #999;
}
.input {
  width: 180px;
}
</style>
