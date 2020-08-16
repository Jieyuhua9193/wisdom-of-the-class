<template>
		<div class="windy-table-wrap">
				<div class="windy-table">
						<Table
								no-data-text="暂无活动哦QAQ，快来创建一个吧"
								:height="viewHeight - 175"
								:columns="columns"
								:data="activeList"></Table>
				</div>
				<div class="footer">
						<Page
								:total="total"
								show-total
								show-sizer
								:page-size="size"
								:page-size-opts="[8,10,16,30]"
								@on-change="onPageChange"
								@on-page-size-change="onPageSizeChange"/>
				</div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue';
import layoutVuex from '@/layout/vuex/common';

export default Vue.extend({
  mixins: [layoutVuex],
  props: {
    activeList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      total: 0,
		    size: 8,
		    page: 1,
      columns: [
        {
          title: '活动名称',
          key: 'name',
          align: 'center'
        },
        {
          title: '报名时间',
          key: 'bookingDateRange',
          align: 'center'
        },
        {
          title: '活动时间',
          key: 'dateRange',
          align: 'center'
        },
        {
          title: '活动级别',
          slot: 'type',
          align: 'center'
        },
        {
          title: '奖励德育分',
          slot: 'score',
          align: 'center'
        },
        {
          title: '发起人',
          slot: 'createUser',
          align: 'center'
        },
        {
          title: '操作',
          slot: 'operation',
          align: 'center'
        }
      ]
    }
  },
  methods: {
    onPageChange() {},
    onPageSizeChange() {}
  }
})
</script>

<style scoped>
.windy-table {
		border-radius: 5px;
		border: 1px solid #e4e4e4;
		overflow: hidden;
}
.footer {
		text-align: right;
		margin-right: -10px;
		margin-top: 10px;
}
</style>
