<template>
		<div class="edit-email-tpl">
				<HeaderBar
						:title="email && email.name"/>
				<div class="content">
						<Editor
								v-if="emailTpl"
								height="100%"
								:htmlTpl="emailTpl"/>
						<EmailConfig/>
				</div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderBar from '../components/edit-email-tpl/HeaderBar.vue'
import Editor from '../components/edit-email-tpl/Editor.vue'
import EmailConfig from '../components/edit-email-tpl/EmailConfig.vue'
import commonClient from '@/common/apis'

export default Vue.extend({
  data() {
    return {
      email: {},
      emailTpl: '',
      name: ''
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
