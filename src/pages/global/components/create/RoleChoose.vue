<template>
  <FormWrap label="选择角色">
    <div
      class="role-wrap"
      :class="{selected:role === Role.MainTeacher}"
      @click="onChecked(Role.MainTeacher)">
      <span class="label">我是班主任</span>
      <span class="text">我要创建班级</span>
    </div>
    <div
      class="role-wrap"
      :class="{selected:role === Role.Teacher}"
      @click="onChecked(Role.Teacher)">
      <span class="label">我是任课老师/辅导员</span>
      <span class="text">我要加入班级</span>
    </div>
    <div
      class="role-wrap"
      :class="{selected:role === Role.Student}"
      @click="onChecked(Role.Student)">
      <span class="label">我是班级干部</span>
      <span class="text">我要加入班级</span>
    </div>
    <div
      class="join-wrap"
      v-if="role === Role.Teacher || role === Role.Student">
      <div
        class="form"
        v-if="!hadRoles">
        <Input
          class="invite-code"
          v-model="inviteCode"
          :placeholder="
          role === Role.Teacher?
          '请输入教师邀请码':'请输入班干部邀请码'"/>
        <br>
        <Button
          type="info"
          class="button"
          @click="onConfirm">
          验证
        </Button>
      </div>
      <h3
        class="joined"
        v-else
      >您已成功加入XXX班级，完善下面信息开始使用</h3>
    </div>
  </FormWrap>
</template>

<script lang="ts">
import Vue from 'vue';
import Role from '../../models/Role';
import FormWrap from './FormWrap.vue';

export default Vue.extend({
  props: {
    role: { type: Number }
  },
  data() {
    return {
      Role,
      inviteCode: null
    }
  },
  components: {
    FormWrap
  },
  methods: {
    onChecked(role: number) {
      this.$store.commit('UPDATE_CHECKED_ROLE', role)
    }
  }
})
</script>

<style scoped>
.role-wrap span {
  display: block;
}
.role-wrap {
  border-radius: 5px;
  border: 1px solid rgba(128, 128, 128, 0.1);;
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 180px;
  padding: 17px 15px;
  background: rgba(128, 128, 128, 0.1);
  cursor: pointer;
  user-select: none;
}
.label {
  font-size: 14px;
  font-weight: bold;
  color: #505050;
}
.selected {
  /*border: 1px solid rgba(90, 188, 84, 1);*/
  background: rgba(90, 188, 84, 0.3);
  box-shadow: 0 3px 5px rgba(90, 188, 84, 1);
}
.invite-code {
  display: inline-block;
  width: 400px;
}
.join-wrap {
  padding-top: 10px;
}
.join-wrap .button {
  margin-top: 25px;
}
.joined {
  color: #75b95e;
}
</style>

<style>
.invite-code .ivu-input {
  border: none;
  border-bottom: 1px solid #999999;
  border-radius: 0;
  box-shadow: none;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bold;
}
.invite-code .ivu-input:focus {
  border-bottom: 1px solid #128bf1;
  box-shadow: none;
}
</style>
