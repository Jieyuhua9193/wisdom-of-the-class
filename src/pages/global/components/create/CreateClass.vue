<template>
  <FormWrap label="创建班级">
    <div class="create-class">
      <div class="item">
        <span class="label">真实姓名：</span>
        <Input
          class="input"
          placeholder="请填写"/>
      </div>
    </div>
  </FormWrap>
</template>

<script lang="ts">
import Vue from 'vue';
import FormWrap from './FormWrap.vue';

export default Vue.extend({
  data() {
    return {
      classInfo: {
      }
    }
  },
  components: {
    FormWrap
  },
  watch: {
    baseInfo: {
      handler() {
        console.log("监听到了变化 ", this.classInfo);
      },
      deep: true
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
</style>
