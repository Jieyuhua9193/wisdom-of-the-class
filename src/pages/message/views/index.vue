<template>
		<div class="page-message">
				<CmsSwitch />
				<router-view/>
		</div>
</template>

<script lang="ts">
import Vue from 'vue';
import CmsSwitch from '../components/Switch.vue'

export default Vue.extend({
  data() {
    return {}
  },
  components: {
    CmsSwitch
  }
});
</script>

<style scoped>
.page-message {
		padding: 10px;
		overflow: auto;
}
</style>
