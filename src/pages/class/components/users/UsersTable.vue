<template>
		<div class="wrap">
				<div class="student-table">
						<Table
								no-data-text="熬了个喵┗|｀O′|┛ 嗷~~没有数据哦~~"
								:height="viewHeight - 170"
								:loading="loading"
								:columns="columns"
								:data="userList">
								<template type="text" slot-scope="{row}" slot="realName">
										<Tag
												v-if="row.role < 12"
												class="tag"
												:color="tagColor(row.role)">
												{{getRoleText(row.role)}}
										</Tag>
										<span>{{row.realName}}</span>
								</template>
								<template type="text" slot-scope="{row}" slot="sex">
										<span class="icon-sex icon-sex-boy" v-if="row.sex === 1"></span>
										<span class="icon-sex icon-sex-girl" v-else></span>
										<span>{{row.sex === 1?'男':'女'}}</span>
								</template>
								<template type="text" slot-scope="{row}" slot="qq">
										<a
												class="icon-qq"
												target="_blank"
												:href="`http://wpa.qq.com/msgrd?v=3&uin={row.qq}&site=qq&menu=yes`"></a>
										<span>{{row.qq}}</span>
								</template>
								<template slot="operation" slot-scope="{row}">
										<a @click="getUserDetail(row)">详情</a>
										<Divider type="vertical"/>
										<a @click="getUserDetail(row)">编辑</a>
										<Divider
												type="vertical"
												v-if="row.role !== 0"/>
										<a
												class="cms-red"
												v-if="row.role !== 0"
												@click="remove(row)">踢出班级</a>
								</template>
						</Table>
				</div>
				<SidePage
						:show="showUserDetail"
						title="详细信息"
						@close="showUserDetail = false">
						<UserDetail
								v-if="showUserDetail"
								:dormitories="dormitories"
								:userDetail="userDetail"/>
				</SidePage>
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
import SidePage from '@/common/components/ui/SidePage.vue';
import UserDetail from '@/pages/class/components/users/UserDetail.vue';
import classClient from '@/pages/class/apis';
import layoutVuex from '@/layout/vuex/common';
import classVuex from '@/pages/class/vuex/common';
import UserType from '@/pages/class/models/UserType';
import Role, {getRoleText} from '@/common/models/Role';

interface Row {
  email: string
}

export default Vue.extend({
  mixins: [layoutVuex, classVuex],
  props: {
    keyword: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      Role,
      getRoleText,
      loading: true,
      userList: [],
      showUserDetail: false,
      userDetail: {},
      dormitories: [],
      page: 1,
      size: 8,
      total: 0,
      currentRow: {}
    }
  },
  computed: {
    columns() {
      if (this.userType === UserType.student) {
        return [
          {
            title: '学号',
            key: 'studentId',
          },
          {
            title: '姓名',
            slot: 'realName',
            ellipsis: true,
            tooltip: true
          },
          {
            title: '性别',
            slot: 'sex',
            width: 80
          },
          {
            title: '手机号',
            key: 'phoneNumber'
          },
          {
            title: '身份证号',
            key: 'idCardNumber',
            width: 170
          },
          {
            title: '邮箱',
            key: 'email',
            width: 165
          },
          {
            title: 'QQ',
            slot: 'qq',
          },
          {
            title: '操作',
            slot: 'operation',
            width: 180,
            fixed: 'right'
          }
        ].map(item => {
          return {
            align: 'center',
            minWidth: 140,
            ...item
          }
        })
      } else {
        return [
          {
            title: '姓名',
            slot: 'realName',
            ellipsis: true,
            tooltip: true
          },
          {
            title: '手机号',
            key: 'phoneNumber'
          },
          {
            title: '邮箱',
            key: 'email',
            width: 165
          },
          {
            title: 'QQ',
            slot: 'qq'
          },
          {
            title: '办公室地址',
            key: 'officeAddress'
          },
          {
            title: '操作',
            slot: 'operation',
            width: 180,
            fixed: 'right'
          }
        ].map(item => {
          return {
            align: 'center',
            minWidth: 140,
            ...item
          }
        })
      }
    }
  },
  mounted() {
    this.fetchDataList();
    this.fetchDormitories();
  },
  methods: {
    fetchDataList() {
      this.loading = true;
      classClient.get({
        type: this.userType,
        page: this.page,
        size: this.size
      }).success(r => {
        this.total = r.total;
        this.userList = r.users;
        // this.loading = false;
        setTimeout(() => {
          this.loading = false;
        }, 300)
      })
    },
    fetchDormitories() {
      classClient.getDormitories().success(r => {
        this.dormitories = r.map((item: object) => {
          let dormitory = { ...item };
          delete (dormitory as any).students;
          return dormitory
        });
      })
    },
    searchStudent(keyword: String) {
      this.loading = true;
      classClient.search({ keyword }).success(r => {
        this.userList = r;
        this.loading = false
      })
    },
    tagColor(role: number) {
      switch (role) {
        case Role.admin:
          return 'gold';
        case Role.counselor:
          return 'magenta';
        default:
          return 'purple'
      }
    },
    onPageChange(page: number) {
      this.page = page;
      this.fetchDataList()
    },
    onPageSizeChange(size: number) {
      this.size = size;
      this.fetchDataList()
    },
    getUserDetail(row: Row): void {
      this.currentRow = row;
      classClient.getUserInfoByEmail({
        email: row.email
      }).success(r => {
        this.userDetail = r;
        this.showUserDetail = true;
      })
    },
    remove(row: Row) {
      this.$Modal.confirm({
        title: '确认移除',
        content: '<p>该操作会移除并清除该用户的所有信息，确认操作？</p>',
        onOk: () => {
          classClient.remove({
            email: row.email
          }).success(() => {
            this.fetchDataList();
            this.$Message.success('已将该用户移除班级');
          })
        }
      });
    }
  },
  watch: {
    keyword() {
      this.searchStudent(this.keyword)
    },
    userType() {
      this.page = 1;
      this.fetchDataList()
    },
    refreshCount() {
      this.fetchDataList();
      this.getUserDetail(this.currentRow);
    }
  },
  components: {
    SidePage,
    UserDetail
  }
})
</script>

<style scoped>
.student-table {
		margin-top: 20px;
		border-radius: 5px;
		border: 1px solid #e4e4e4;
		overflow: hidden;
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
.icon-qq {
		color: red;
		margin-right: 5px;
		font-size: 15px;
		vertical-align: middle;
}
.footer {
		text-align: right;
		margin-right: -10px;
		margin-top: 10px;
}
.cms-red {
		color: red;
}
.tag {
		transform: scale(0.7);
		margin-right: -3px;
		position: relative;
		top: -1px;
}
</style>
