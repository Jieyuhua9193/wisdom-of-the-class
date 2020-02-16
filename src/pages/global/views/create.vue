<template>
  <div id="create_page">
    <div class="create-body">
      <CreateHeader :userEmail="userInfo.email"/>
      <div class="create-card">
        <RoleChoose
          :role="checkedRole"/>
        <div
          class="create-role-wrap"
          v-if="hadRoles || checkedRole === Role.MainTeacher">
          <BaseInfo ref="base"/>
          <TeacherInfo
            ref="teacher"
            v-if="checkedRole === Role.MainTeacher ||
            checkedRole === Role.Teacher"/>
          <StudentInfo
            ref="student"
            v-if="checkedRole === Role.Student"/>
          <CreateClass
            ref="create"
            v-if="checkedRole === Role.MainTeacher"/>
        </div>
      </div>
      <Button
        type="primary"
        class="button"
        size="large"
        @click="onConfirm"
        v-if="hadRoles || checkedRole === Role.MainTeacher"
        :disabled="!hadRoles && checkedRole !== Role.MainTeacher">
        确认提交
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CreateHeader from '../components/create/Header.vue';
import RoleChoose from '../components/create/RoleChoose.vue';
import BaseInfo from '../components/create/BaseInfo.vue';
import TeacherInfo from '../components/create/TeacherInfo.vue';
import StudentInfo from '../components/create/StudentInfo.vue';
import CreateClass from '../components/create/CreateClass.vue';
import Role from '../models/Role';
import userVuex from '@/pages/user/vuex/common';
import globalVuex from '@/pages/global/vuex/common';

export default Vue.extend({
  mixins: [userVuex, globalVuex],
  data() {
    return {
      Role
    }
  },
  components: {
    CreateHeader,
    RoleChoose,
    BaseInfo,
    TeacherInfo,
    StudentInfo,
    CreateClass
  },
  methods: {
    onConfirm() {
      (this as any).$refs.base.check();
      const requestData = {
        ...(this as any).$refs.base.baseInfo
      };
      console.log(requestData)
    }
  }
});
</script>

<style scoped>
#create_page {
  padding: 112px 0;
  height: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  background: #f8f8f8;
}
#create_page::-webkit-scrollbar {
  display: none;
}
.create-body {
  width: 780px;
  margin: 0 auto;
}
.create-card {
  border-radius: 10px;
  padding: 30px 40px 40px 40px;
  background: #FFFFFF;
}
.button {
  margin-top: 20px;
  width: 120px;
  background-color: #2d8cf0;
  border-color: #2d8cf0;
}
</style>
