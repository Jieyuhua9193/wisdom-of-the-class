<template>
		<div class="page-student">
				<Tabs
						:value="currentMenuIndex"
						size="small"
						@on-click="onMenuSwitch">
						<TabPane
								v-for="(menu,index) in menus"
								:key="index"
								:label="menu.label"
								:name="String(index)">
								<router-view v-if="String(index) === currentMenuIndex"/>
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
    label: '批量导入',
    path: '/student/import'
  }
];

export default Vue.extend({
  data() {
    return {
      menus,
      currentMenuIndex: '0'
    }
  },
  created() {
    const path = this.$router.currentRoute.path;
    menus.find((r, index) => {
      if (r.path === path) {
        this.currentMenuIndex = String(index)
      }
    })
  },
  methods: {
    onMenuSwitch(index: string) {
      const path = menus[Number(index)].path;
      this.currentMenuIndex = index;
      this.$router.push(path)
    }
  }
});
</script>

<style scoped>
.page-student {
		padding: 10px;
		overflow: auto;
}
</style>
