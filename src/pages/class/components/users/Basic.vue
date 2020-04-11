<template>
		<div class="basic">
				<fieldset>
						<legend>微信信息</legend>
						<div class="wrap">
								<template v-if="!noWxInfo">
										<div class="row">
												<label>微信昵称：</label>
												{{ userDetail.wxName }}
												<span class="icon-wechat-round" v-if="userDetail.wxName"></span>
										</div>
										<div class="row">
												<label>微信号：</label>
												{{ userDetail.wxNumber }}
												<span class="icon-wechat-round" v-if="userDetail.wxNumber"></span>
										</div>
										<div class="row">
												<label>OpenID：</label>
												<span v-if="userDetail.openid">{{ userDetail.openid }}</span>
												<span class="no-wechat-info" v-else>未绑定小程序</span>
										</div>
								</template>
								<div class="no-wechat-info" v-if="noWxInfo">
										<span>未绑定微信相关信息</span>
								</div>
						</div>
				</fieldset>
				<fieldset v-if="userDetail.role > 2">
						<legend>班级活跃信息</legend>
						<div class="occupations">
								<dl>
										<dt>参与中活动</dt>
										<dd class="value colored">0</dd>
										<dd class="extra">
												累计<span>0</span>
										</dd>
								</dl>
								<dl>
										<dt>当前德育分</dt>
										<dd class="value colored">0</dd>
								</dl>
						</div>
				</fieldset>
				<fieldset v-if="userDetail.role > 2">
						<legend>寝室信息</legend>
						<div class="wrap">
								<div class="row field">
										<label>寝室号：</label>
										<span v-if="!isDorEdit && userDetail.dormitory">
												{{userDetail.dormitory.number}}
										</span>
										<span
												v-if="!userDetail.dormitory"
												class="text-prompt">暂未添加
										</span>
										<div class="edit-item" v-if="isDorEdit">
												<Select
														v-model="dormitory"
														size="small"
														style="width:100px">
														<Option
																v-for="(item, index) in dormitories"
																:value="item.number"
																:key="index">
																{{ item.number }}
														</Option>
												</Select>
												<Button
														type="primary"
														size="small"
														class="btn"
														:loading="dorLoading"
														@click="updateDor">确定
												</Button>
												<Button
														class="btn"
														size="small"
														@click="isDorEdit = false">取消
												</Button>
										</div>
										<a
												v-if="!isDorEdit"
												class="icon-plain-pen edit"
												@click="isDorEdit = true"></a>
								</div>
								<div class="row">
										<label>同寝成员：</label>
										<span v-if="userDetail.dormitory">
												{{dorStudents}}
										</span>
								</div>
						</div>
				</fieldset>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'
import classClient from '@/pages/class/apis';

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
  data() {
    return {
      isDorEdit: false,
      dormitory: '',
      dorLoading: false,
      dorStudents: '暂无成员'
    }
  },
  computed: {
    noWxInfo() {
      const e = this.userDetail;
      return !e.wxName && !e.wxNumber && !e.openid;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.userDetail && this.userDetail.dormitory) {
        let dormitory = this.userDetail.dormitory;
        this.fetchDorStudents(dormitory._id);
        delete dormitory.students;
        this.dormitory = dormitory.number;
      }
    },
    updateDor() {
      (this as any).dorLoading = true;
      let dormitory = this.dormitories.find(
        r =>
          r.number === this.dormitory
      );
      if (dormitory) {
        classClient.updateUser({
          email: this.userDetail.email,
          params: {
            dormitory: dormitory._id
          }
        }).success(() => {
          this.$Message.success('修改成功');
          this.fetchDorStudents(dormitory._id);
          this.$store.commit('REFRESH_USER');
          this.dorLoading = false;
          this.isDorEdit = false;
        })
      } else {
        this.$Message.warning('请选择寝室');
        this.dorLoading = false
      }
    },
    fetchDorStudents(id: string) {
      classClient.getDorStudents({ id }).success(r => {
        if (r && r.length) {
          this.dorStudents = r.map(student => {
            if (student.realName !== this.userDetail.realName) {
              return student.realName
            }
            return null
          }).filter(d => d).join('，')
        }
      })
    }
  }
})
</script>

<style scoped>
.occupations {
		display: flex;
		padding: 10px 0;
}
.occupations dl {
		flex: 1;
		text-align: center;
		color: #333;
}
.occupations dd.extra {
		color: #999;
}
.occupations .value {
		font-size: 16px;
}
.occupations .value.colored {
		color: #14549F;
}
.fields {
		padding: 15px 10px;
}
.no-wechat-info {
		color: #999;
}
.text-prompt {
		color: #999;
}
.location-field {
		display: inline-block;
}
.location-field button {
		display: inline-block;
		margin-left: 5px;
}
.edit {
		display: none;
		vertical-align: middle;
		margin-top: -5px;
		margin-left: 5px;
}
.edit:before {
		color: #666;
		vertical-align: middle;
}
.field:hover .edit {
		display: inline-block;
}
.icon-wechat-round {
		color: #49BB15;
}
.edit-item {
		display: inline-block;
}
.edit-item .btn {
		margin-left: 5px;
}
</style>

<style>
.customer-detail-basic .ivu-cascader-rel input {
		height: 24px;
}
.customer-detail-basic .ivu-cascader {
		display: inline-block;
}
</style>

