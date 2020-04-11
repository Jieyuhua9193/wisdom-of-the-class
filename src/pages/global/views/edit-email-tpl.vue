<template>
		<div class="edit-email-tpl">
				<HeaderBar
						:title="email && email.name"
						@onEmailTaskCreate="onEmailTaskCreate"/>
				<div class="content">
						<Editor
								v-if="emailTpl"
								height="100%"
								ref="editor"
								:htmlTpl="emailTpl"/>
						<EmailConfig ref="emailConfig"/>
				</div>
				<Modal
						v-model="showModal"
						title="确定创建群发任务"
						@on-ok="confirmCreateTask"
						:z-index="10008"
						@on-cancel="showModal = false">
						<p>确认邮件无误，创建群发任务？</p>
				</Modal>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderBar from '../components/edit-email-tpl/HeaderBar.vue'
import Editor from '../components/edit-email-tpl/Editor.vue'
import EmailConfig from '../components/edit-email-tpl/EmailConfig.vue'
import commonClient from '@/common/apis'

interface Request {
  subject: string;
		target: {
		  type: Number;
		  users: object[];
		};
		emailHtml: string;
		sendTime: string;
  emailConfig: object;
}

export default Vue.extend({
  data() {
    return {
      email: {},
      emailTpl: '',
      name: '',
      showModal: false,
		    request: {}
    }
  },
  created() {
    const query = this.$router.currentRoute.query;
    this.email = query && query.email;
    (this as any).name = query && query.name;
    this.initEmailTpl();
  },
  methods: {
    initEmailTpl() {
      if (this.name && this.name.trim() !== '') {
        commonClient.getEmailTplDetail({
          fileName: this.name
        }).success(r => {
          this.emailTpl = r
        }).error(() => {
          this.$Message.error('解析模板异常，请刷新重试');
          // this.$router.go(-1)
        })
      } else {
        this.$Message.error('解析模板异常，请刷新重试');
        // this.$router.go(-1)
      }
    },
    onEmailTaskCreate() {
      let emailConfig = (this.$refs.emailConfig as any).getFormData();
      let request = {
        target: {
          type: emailConfig.targetType,
          users: emailConfig.users
        },
        subject: emailConfig.subject,
        emailHtml: '',
        sendTime: emailConfig.sendTime,
        emailConfig: {},
      };
      this.request = request;
      request.emailHtml = (this.$refs.editor as any).getEmailHtml();
      if (this.check(request)) {
        // 验证通过
		       this.showModal = true
      }
    },
				check(request: Request) {
      if (!request || !request.subject) {
								this.$Message.warning('请填写邮件主题');
								return false
      } else if (request.target.type === 3 && !request.target.users.length) {
        this.$Message.warning('自定义群发目标必须选择一个收件人');
        return false
      } else {
        return true
      }
				},
    confirmCreateTask() {
      commonClient.sendEmail(this.request).success(r => {
        console.log(r);
        this.$Notice.success({
          title: '邮件任务已创建',
          desc: '请留意模板消息群发->群发记录->了解群发状态',
          duration: 0
        });
        this.$router.go(-1)
      });
    }
  },
  components: {
    HeaderBar,
    Editor,
    EmailConfig
  }
})
</script>

<style scoped>
.content {
		display: flex;
		flex-direction: row;
}
.overview {
		width: 488px;
		overflow: hidden;
}
</style>
<style>
/* table 样式 */
table {
		border-top: none !important;
		border-left: none !important;
}
table td,
table th {
		border-bottom: none !important;
		border-right: none !important;
		padding: 3px 5px;
}
table th {
		border-bottom: none !important;
		text-align: center;
}
/* blockquote 样式 */
blockquote {
		display: block;
		border-left: none !important;
		padding: 5px 10px;
		margin: 10px 0;
		line-height: 1.4;
		font-size: 100%;
		background-color: #f1f1f1;
}
.w-e-text-container {
		height: 100vh !important; /*!important是重点，因为原div是行内样式设置的高度300px*/
}
</style>
