<template>
		<div class="user-detail" v-if="userDetail">
				<div class="user-info-wrap">
						<div class="info-box">
								<div class="avatar fn-left">
										<img :src="userDetail.avatar || defAvatar"/>
								</div>
								<dl class="user-info fn-left">
										<dt>{{userDetail.realName}}</dt>
										<Tag
												v-if="userDetail.role < 12"
												class="tag"
												:color="tagColor(userDetail.role)">
												{{getRoleText(userDetail.role)}}
										</Tag>
										<dd>
												<span class="icon-sex icon-sex-boy" v-if="userDetail.sex === 1"></span>
												<span class="icon-sex icon-sex-girl" v-else></span>
												<span>{{userDetail.phoneNumber}}</span>
										</dd>
								</dl>
						</div>
						<Tabs
								v-model="currentTab"
								class="tabs"
								size="small">
								<TabPane label="资料" name="basic"></TabPane>
								<TabPane label="轨迹" name="trace"></TabPane>
						</Tabs>
				</div>
				<div class="detail-body">
						<Basic
								:userDetail="userDetail"
								:dormitories="dormitories"
								v-if="currentTab === 'basic'"/>
						<Trace
								v-if="currentTab === 'trace'"
						  :user="userDetail"/>
				</div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Basic from './Basic.vue';
import Trace from './Trace.vue';
import Role, {getRoleText} from '@/common/models/Role';

export default Vue.extend({
  props: {
    userDetail: {
      type: Object,
      default: () => {
        return {}
      }
    },
    dormitories: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  mounted() {
    console.log(this.userDetail)
  },
  data() {
    return {
      getRoleText,
      Role,
      defAvatar: 'http://qiniu.jieyuhua.top/blog/library/16.jpg',
      currentTab: 'basic'
    }
  },
  methods: {
    tagColor(role: number) {
      switch (role) {
        case Role.admin:
          return 'gold';
        case Role.counselor:
          return 'magenta';
        default:
          return 'purple'
      }
    }
  },
  components: {
    Basic,
    Trace
  }
})
</script>

<style scoped>
.user-info-wrap {
		background: #F9F9F9;
		height: 157px;
		/* border-bottom: 1px solid #ECECEC; */
		border-top: 1px solid #F1F1F1;
		position: relative;
		padding: 40px;
		box-sizing: border-box;
		overflow: hidden;
}
.info-box img {
		border-radius: 50%;
		width: 50px;
		height: 50px;
}
.avatar {
		margin-right: 10px;
}
.user-info dt {
		font-size: 16px;
		color: #000;
		display: inline-block;
}
.icon-sex-boy {
		color: blue;
}
.icon-sex {
		display: inline-block;
		vertical-align: middle;
		margin-right: 5px;
}
.icon-sex-girl {
		color: deeppink;
		font-size: 15px;
}
.tag {
		transform: scale(0.8);
		margin-right: -3px;
		position: relative;
		top: -3px;
		display: inline-block;
}
.user-info-wrap .tabs {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
}
.detail-body {
		padding: 30px;
}
.user-info-wrap >>> .ivu-tabs-bar {
		margin-bottom: 0;
}
.user-info-wrap >>> .ivu-tabs-nav-container {
		padding-left: 30px;
}
.user-info-wrap >>> .ivu-tabs-nav .ivu-tabs-tab-active {
		color: #000;
}
.user-info-wrap >>> .ivu-tabs-nav .ivu-tabs-tab:hover {
		color: #000;
}
.user-info-wrap >>> .ivu-tabs-ink-bar {
		background-color: #6159Eb;
}
</style>
<style>
.user-detail fieldset {
		border: 1px solid #ececec;
		padding: 10px;
		border-radius: 5px;
		margin-bottom: 20px;
}
.user-detail fieldset .wrap {
		padding: 0 10px;
		color: #333;
}
.user-detail legend {
		padding: 0 10px;
		margin-left: 0;
}
.user-detail fieldset .row {
		margin-bottom: 5px;
}
.user-detail fieldset .row:last-child {
		margin-bottom: 0;
}
</style>
