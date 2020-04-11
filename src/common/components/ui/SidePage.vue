<template>
		<div class="solid-page-wrap">
				<Drawer
						:value="show"
						:width="width"
						:scrollable="true"
						:closable="false"
						placement="right"
						@on-close="$emit('close')">
						<div class="header" slot="header">
								<h3 :class="{center: showBack}">{{title}}</h3>
								<a class="close icon-back" @click="$emit('close')">返回</a>
						</div>
						<div class="content">
								<slot></slot>
						</div>
				</Drawer>
		</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 600
    },
    showBack: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
  },
  beforeDestroy() {
  },
});
</script>

<style scoped>
.header {
		height: 45px;
		line-height: 45px;
		padding-left: 20px;
		font-size: 14px;
		background-color: #F9F9F9;
		color: #333;
		text-align: center;
}
.header a.close {
		position: absolute;
		left: 0;
		top: 0;
		display: inline-block;
		height: 45px;
		line-height: 45px;
		cursor: pointer;
		padding: 0 25px;
		color: #4a4a4a;
		border-right: 1px solid #F1F1F1;
}
.header a.close:before {
		margin-right: 5px;
		font-size: 12px;
		vertical-align: middle;
		margin-top: -2px;
}
</style>
