<template>
		<div class="customer-detail-trace" v-if="tracesData.length > 0">
				<div
						class="trace-date"
						v-for="(item, index) in tracesData"
						:key="index">
						<h4>{{item.traceDay}}</h4>
						<div class="traces">
								<div class="trace fn-clear">
										<h5>{{item.time}}</h5>
										<div class="trace-content">
												{{ item.traceText }}
										</div>
								</div>
						</div>
				</div>
		</div>
		<div v-else>
				<p class="empty-trace">暂无轨迹</p>
		</div>
</template>

<script lang="ts">
import Vue from 'vue';
import moment from 'moment';
import classClient from '@/pages/class/apis';

export default Vue.extend({
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      moment,
      tracesData: [],
      loadRemarked: false,
    };
  },
  methods: {
    getTrace() {
      classClient.getTrace({
        email: this.user.email
      }).success(r => {
        this.tracesData = r && r.map(item => {
          const { traceText, gmtCreate } = item;
          const traceDay = moment(gmtCreate).format('MM月DD日');
          const time = moment(gmtCreate).format('HH:mm');
          return {
            traceText,
            traceDay,
            time
          }
        })
      })
    }
  },
  mounted() {
    this.getTrace()
  },
});
</script>

<style scoped>
.customer-detail-trace {
		border-left: 1px solid #E4E4E4;
		margin-left: 70px;
		margin-top: 40px;
		padding-top: 20px;
		padding-left: 30px;
		padding-bottom: 30px;
		font-size: 12px;
}
.trace-date {
		position: relative;
}
h4 {
		position: absolute;
		left: -100px;
		top: 0;
		font-weight: normal;
		width: 100px;
}
h4:after {
		content: '';
		display: inline-block;
		width: 12px;
		height: 12px;
		border: 1px solid #979797;
		border-radius: 50%;
		position: absolute;
		right: 24px;
		top: 3px;
		background: #fff;
}
h5 {
		font-weight: normal;
		float: left;
		margin-right: 20px;
}
.trace-content {
		float: left;
}
.trace-content p {
		width: 420px;
}
.trace {
		margin-bottom: 30px;
}
.empty-trace {
		padding-top: 16px;
}
</style>
