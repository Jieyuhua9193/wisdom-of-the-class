<template>
		<li
				class="item-s"
				:class="{
		    'selected': selected,
		    'is-teacher': isTeacher
		  }"
				@click="onClick">
				<span>{{user.realName}}</span>
		</li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    user: {
      type: Object,
      default: null
    },
    users: {
      type: Array,
      default: () => {return []}
    },
    index: {
      type: Number,
      default: null
    }
  },
  computed: {
    selected(): boolean {
      return this.users.includes(this.user)
    },
    isTeacher(): boolean {
      return this.user.role < 3
    }
  },
  methods: {
    onClick() {
      this.$emit('onSelect', this.user, this.index)
    }
  }
})
</script>

<style scoped>
.item-s {
		list-style: none;
		display: inline-block;
		width: 78px;
		height: 40px;
		line-height: 38px;
		text-align: center;
		box-sizing: border-box;
		border: 1px solid #128bf1;
		margin-right: -1px;
		margin-bottom: -1px;
		color: #128bf1;
		cursor: pointer;
}
.selected {
		color: green !important;
		background: rgba(199, 247, 199, 0.8) !important;
		border: 1px solid green !important;
}
.is-teacher {
		color: orange;
}
</style>
