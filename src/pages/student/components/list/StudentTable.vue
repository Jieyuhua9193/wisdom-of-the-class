<template>
		<div class="wrap">
				<div class="student-table">
						<Table
								no-data-text="熬了个喵┗|｀O′|┛ 嗷~~没有数据哦~~"
								:height="450"
								:loading="loading"
								:columns="studentColumns"
								:data="studentList">
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
								<template slot="operation">
										<a>详情</a>
										<Divider type="vertical"/>
										<a>编辑</a>
										<Divider type="vertical"/>
										<a class="cms-red">踢出班级</a>
								</template>
						</Table>
				</div>
				<div class="footer">
						<Page :total="32" show-sizer/>
				</div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'
import studentClient from '@/pages/student/apis'

export default Vue.extend({
  props: {
    keyword: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      loading: true,
      studentColumns: [
        {
          title: '学号',
          key: 'studentId',
        },
        {
          title: '姓名',
          key: 'realName',
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
          slot: 'qq'
        },
        {
          title: '操作',
          slot: 'operation',
          width: 180,
          fixed: 'right'
        }
      ],
      studentList: []
    }
  },
  created() {
    this.studentColumns = this.studentColumns.map(item => {
      return {
        align: 'center',
        minWidth: 100,
        ...item
      }
    })
  },
  mounted() {
    this.fetchDataList()
  },
  methods: {
    fetchDataList() {
      this.loading = true;
      studentClient.get({}).success(r => {
        this.studentList = r;
        this.loading = false
      })
    },
    searchStudent(keyword: String) {
      this.loading = true;
      studentClient.search({ keyword }).success(r => {
        this.studentList = r;
        this.loading = false
      })
    }
  },
  watch: {
    keyword() {
      console.log('on warch')
      this.searchStudent(this.keyword)
    }
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
</style>
