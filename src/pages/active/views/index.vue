<template>
		<div class="page-active">
				<SoftLanding/>
				<div class="bar fn-clear">
						<windyTabs
								class="windy-tabs"
								:content="tabs"
								@change="onTabChange"/>
						<Button
								type="primary"
								shape="circle"
								@click="showSidePage = true"
								class="btn-create fn-right">
								创建活动
						</Button>
				</div>
				<windyTable
						:activeList="activeList"/>
				<SidePage
						:show="showSidePage"
						title="创建活动"
						@close="showSidePage = false">
						<CreateActive
								v-if="showSidePage"
						  @cancel="showSidePage = false"
						  @onCreate="onCreate"/>
				</SidePage>
		</div>
</template>

<script lang="ts">
import Vue from 'vue';
import SoftLanding from '@/pages/active/components/Softlanding.vue';
import windyTabs from '@/common/components/ui/windy-tabs.vue';
import windyTable from '@/pages/active/components/WindyTable.vue';
import SidePage from '@/common/components/ui/SidePage.vue';
import CreateActive from '@/pages/active/components/CreateActive.vue';
import Status from '@/pages/active/models/Status';
import activeClient from '@/pages/active/apis';

export default Vue.extend({
  data() {
    return {
      Status,
      tabs: [
        { title: '全部', value: Status.All },
        { title: '未开始', value: Status.Prepare },
        { title: '进行中', value: Status.Ing },
        { title: '已结束', value: Status.End }
      ],
      activeList: [],
      status: Status.All,
      total: 0,
      showSidePage: false
    }
  },
  components: {
    SoftLanding,
    windyTabs,
    windyTable,
    SidePage,
    CreateActive
  },
  mounted() {
    this.fetchActiveList();
  },
  methods: {
    onTabChange(value: Number): void {
      console.log('on tab change', value);
      this.status = value;
      this.fetchActiveList()
    },
    fetchActiveList() {
      activeClient.get({
        status: this.status
      }).success(r => {
        this.total = r.total;
        this.activeList = r.list;
      })
    },
    onCreate(data) {
      console.log('data', data)
    }
  }
})
</script>

<style scoped>
.page-active {
		padding: 20px;
}
.windy-tabs {
		margin-top: 10px;
		/*margin-left: 10px;*/
		margin-bottom: 10px;
}
.btn-create {
		height: 30px;
		margin-top: 10px;
}
</style>
