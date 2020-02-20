<template>
  <FormWrap label="教师信息">
    <div class="teacher-info">
      <div class="item">
        <span class="label">办公室地址：</span>
        <Input
          class="input"
          v-model="teacherInfo.officeAddress"
          :class="{invalid:$officeAddress.$dirty && $officeAddress.$invalid}"
          placeholder="请填写"/>
        <p class="prompt address">请填写详细地址，方便学生联系</p>
      </div>
    </div>
  </FormWrap>
</template>

<script lang="ts">
import Vue from 'vue';
import FormWrap from './FormWrap.vue';
import TeacherInfoV from '../../validates/TeacherInfo';

export default Vue.extend({
  mixins: [TeacherInfoV],
  data() {
    return {
      teacherInfo: {
        officeAddress: null
      }
    }
  },
  components: {
    FormWrap
  }
})
</script>

<style scoped>
.teacher-info {
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
  width: 280px;
}
.prompt {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}
.address {
  margin-left: 80px;
}
</style>
