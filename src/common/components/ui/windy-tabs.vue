<template>
		<div
				class="slide-tabs fn-clear"
				v-show="show">
				<div
						class="tab"
						v-for="(tab, key) in content"
						:key="key"
						:class="{selected: (key === selectedKey),'init-tab-style': init && key === defaultIndex}"
						:ref="`tab${key}`"
						@click="onChange(key, tab.value, tab.title, tab.count)">
      <span class="tab-title" v-show="!showColorBubbles">
        {{tabTitle(tab.title, tab.count)}}
        <Icon class="ivu-load-loop" type="ios-loading" v-if="loading"></Icon>
      </span>
						<span class="tab-title" v-show="showColorBubbles">
        <span class="tab-title-margin">{{tab.title}}</span><span :class="{red:tab.color}" v-if="tab.count">{{tab.count}}</span>
        <Icon class="ivu-load-loop" type="ios-loading" v-if="loading"></Icon>
      </span>
				</div>
				<div
						class="slide-active-tab-background"
						:class="{transparent: init}"
						:style="{transform: `translateX(${activeTabOffset}px)` }">
      <span class="tab-title">
        {{ activeTabTitle }} {{ activeTabCount === 0 ? '' : activeTabCount }}
        <Icon class="ivu-load-loop" type="ios-loading" v-if="loading"></Icon>
      </span>
				</div>
		</div>
</template>

<script lang='ts'>
import Vue from 'vue';

interface Tab {
  title: string;
  value: number;
  count?: number;
  color?: boolean;
}

export default Vue.extend({
  props: {
    defaultIndex: {
      type: Number,
      default: 0,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    reset: {
      type: Boolean,
      default: false,
    },
    content: {
      type: Array as () => Tab[],
      default: [],
    },
    show: {
      type: Boolean,
      default: true,
    },
    showColorBubbles:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      selectedKey: 0,
      activeTabTitle: '',
      activeTabCount: 0,
      activeTabOffset: 0,
      init: true,
    };
  },
  methods: {
    tabTitle(title: string, count: any) {
      if (count) {
        return `${title} ${count}`
      } else {
        return `${title}`
      }
    },
    onChange(key: number, value: number, title: string, count?: number) {
      this.init = false;
      // 动态绑定
      this.activeTabTitle = this.content[key].title;
      (this as any).activeTabCount = this.content[key].count;
      this.selectedKey = key;
      this.$emit('change', value, key);
      this.moveActiveTab((event as any).currentTarget);
    },
    moveActiveTab(element: any) {
      this.activeTabOffset = element.offsetLeft;
      (this as any).sliding = true;
      setTimeout(() => {
        (this as any).sliding = false;
      }, 500);
    },
    resetPosition() {
      setTimeout((): any => {
        const s = (this as any).$refs[`tab0`][0];
        this.activeTabTitle = this.content[0].title;
        (this as any).activeTabCount = this.content[0].count;
        this.selectedKey = 0;
        this.activeTabOffset = s.offsetLeft;
        this.moveActiveTab(s);
      }, 0.1);
    },
  },
  mounted() {
    setTimeout((): any => {
      const s = (this as any).$refs[`tab${this.defaultIndex}`][0];
      this.activeTabTitle = this.content[this.defaultIndex].title;
      (this as any).activeTabCount = this.content[this.defaultIndex].count;
      this.selectedKey = this.defaultIndex;
      this.activeTabOffset = s.offsetLeft;
      this.moveActiveTab(s);
    }, 0.1);
  },
  watch: {
    reset(value) {
      if (value) {
        this.resetPosition();
      }
    },
    defaultIndex() {
      this.init = true;
      setTimeout((): any => {
        const s = (this as any).$refs[`tab${this.defaultIndex}`][0];
        this.activeTabTitle = this.content[this.defaultIndex].title;
        (this as any).activeTabCount = this.content[this.defaultIndex].count;
        this.selectedKey = this.defaultIndex;
        this.activeTabOffset = s.offsetLeft;
        this.moveActiveTab(s);
      }, 0.1);
    },
    content() {
      setTimeout((): any => {
        const s = (this as any).$refs[`tab${this.selectedKey}`][0];
        this.activeTabTitle = this.content[this.selectedKey].title;
        (this as any).activeTabCount = this.content[this.selectedKey].count;
        this.activeTabOffset = s.offsetLeft;
        this.moveActiveTab(s);
      }, 0.1);
    },
  },
});
</script>

<style scoped>
.slide-tabs {
		background: #E7E7E7;
		border-radius: 20px;
		display: inline-block;
		position: relative;
}
.tab {
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		float: left;
		padding: 0 25px;
		border-radius: 20px;
		cursor: pointer;
		transition:  color 0.3s ease;
		color: #666;
}
.tab.selected {
		color: #fff;
}
.slide-active-tab-background {
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		float: left;
		padding: 0 25px;
		border-radius: 20px;
		cursor: pointer;
		background: #16A3EB;
		color: #fff;
		position: absolute;
		top: 0;
		left: 0;
		transition: all 0.3s ease;
		z-index: 2;
}
.tab-title {
		position: relative;
		z-index: 1;
}
.tab.selected .tab-title {
		z-index: 3;
}
.slide-active-tab-background .tab-title {
		opacity: 0;
}
.init-tab-style {
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		float: left;
		padding: 0 25px;
		border-radius: 20px;
		cursor: pointer;
		background: #16A3EB;
		color: #fff;
		transition: all 0.3s ease;
}
.transparent {
		opacity: 0;
}
.red{
		background-color:red;
		padding:0px 4px;
		color: #FFFFFF;
		border-radius: 7px;
}
.tab-title-margin{
		margin-right: 4px;
}
</style>
