<template>
  <div class="page-student">
    <Tabs
      :value="0"
      size="small"
      @on-click="onMenuSwitch">
      <TabPane
        v-for="(menu,index) in menus"
        :key="index"
        :label="menu.label"
        :name="String(index)">
        <router-view/>
      </TabPane>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface MenuItem {
  label: string,
  path: string
}

const menus: MenuItem[] = [
  {
    label: '学生列表',
    path: '/student/list'
  },
  {
    label: '消息群发',
    path: '/student/messaging'
  },
  {
    label: '批量导入',
    path: '/student/import'
  }
];

export default Vue.extend({
  data() {
    return {
      menus
    }
  },
  methods: {
    onMenuSwitch(index: string) {
      const path = menus[Number(index)].path;
      this.$router.push(path)
    }
  }
});
</script>

<style scoped>
.page-student {
  padding: 10px;
}
</style>
