<template>
		<div class="message-email">
				<EmailMsg />
		</div>
</template>

<script lang="ts">
import Vue from 'vue'
import EmailMsg from '../components/email/EmailMsg.vue'

export default Vue.extend({
  components: {
    EmailMsg
  }
})
</script>

<style scoped>

</style>
