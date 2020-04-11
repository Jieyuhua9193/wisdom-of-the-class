<template>
		<div class="editor-wrap">
				<div
						ref="editorElem"
						style="text-align:left;"></div>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'
import E from 'wangeditor'

export default Vue.extend({
  props: {
    htmlTpl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editor: null,
      editorContent: ''
    }
  },
  mounted() {
    this.editor = new E(this.$refs.editorElem);
    this.editor.customConfig.onchange = (html: string) => {
      this.editorContent = html;
    };
    this.editor.create();
    this.editor.txt.html(this.htmlTpl);
  },
		methods: {
    getEmailHtml() {
      return this.editor.txt.html();
    }
		}
})
</script>

<style scoped>
.editor-wrap {
		width: 100%;
		height: 100%;
}
</style>
