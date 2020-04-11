<template>
		<div class="student-import">
				<ImportUser/>
		</div>
</template>

<script lang="ts">
import Vue from 'vue'
import ImportUser from '@/common/components/user-import/Index.vue'

export default Vue.extend({
  components: {
    ImportUser
  }
})
</script>

<style scoped>

</style>
