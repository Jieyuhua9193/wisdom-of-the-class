<template>
		<div class="config-form">
				<div class="item">
						<h3 class="title">邮件主题</h3>
						<Input
								clearable
								:class="{}"
								v-model="request.subject"
								placeholder="请输入邮件主题"
								style="width: 280px"
								class="item-in"/>
				</div>
				<div class="item">
						<h3 class="title">群发目标</h3>
						<RadioGroup
								v-model="request.targetType"
								type="button"
								class="item-in">
								<Radio :label="0">全体师生</Radio>
								<Radio :label="1">所有学生</Radio>
								<Radio :label="2">所有老师</Radio>
								<Radio :label="3">自定义</Radio>
						</RadioGroup>
						<ul
								v-if="request.targetType === 3"
								class="user-select item-in">
								<SelectItem
										v-for="(user,index) in users"
										:key="index"
										:user="user"
										:users="request.users"
										:index="index"
										@onSelect="onUserSelect"/>
						</ul>
				</div>
				<div class="item">
						<h3 class="title">邮件插值模板用法</h3>
						<p class="prompt">{{prompt}}</p>
						<ul class="temp-list">
								<em class="label">可插值字段对照表</em>
								<li class="temp-list-item">call：称谓，'同学'，'老师'</li>
								<li class="temp-list-item">realName：姓名</li>
								<li class="temp-list-item">idCardNumber：身份证号</li>
								<li class="temp-list-item">phoneNumber：手机号</li>
								<li class="temp-list-item">email：邮箱</li>
								<li class="temp-list-item">wxName：微信昵称</li>
								<li class="temp-list-item">wxNumber：微信号</li>
								<li class="temp-list-item">sex：性别</li>
								<li class="temp-list-item">qq：qq</li>
								<li class="temp-list-item">officeAddress：办公室地址</li>
								<li class="temp-list-item">familyAddress：家庭住址</li>
								<li class="temp-list-item">studentId：学号</li>
								<li class="temp-list-item">classname：班级名称</li>
						</ul>
				</div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'
import SelectItem from './SelectItem.vue'
import globalClient from '@/pages/global/apis'

export default Vue.extend({
  data() {
    return {
      request: {
        targetType: 0,
        targetUsers: [],
        subject: '',
        users: []
      },
      users: [],
		    prompt: '使用{{}}包裹插值字段，字段会在后台编译成发送目标用户的信息，例如：{{realName}} ==> 张三'
    }
  },
  created() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      globalClient.getAllUser({}).success(r => {
        this.users = r.users
      })
    },
    onUserSelect(user: never) {
      if (this.request.users.includes(user)) {
        const index = this.request.users.findIndex(e => e === user);
        this.request.users.splice(index, 1)
      } else {
        this.request.users.push(user)
      }
    }
  },
  components: {
    SelectItem
  }
})
</script>

<style scoped>
.item {
		margin-top: 20px;
		padding-left: 28px;
}
.item .title {
		padding-bottom: 10px;
}
.item .item-in {
		padding-left: 10px;
}
.user-select {
		margin-top: 15px;
}
.temp-list {
		padding-left: 20px;
		padding-top: 10px;
}
.temp-list .label {
		color: #000;
		font-size: 12px;
}
.temp-list .temp-list-item {
		margin-left: 20px;
		line-height: 25px;
}
</style>
