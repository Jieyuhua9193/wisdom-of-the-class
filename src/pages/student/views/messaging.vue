<template>
  <div class="student-messaging">
    <CmsSwitch />
    <EmailMsg />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CmsSwitch from '../components/messaging/Switch.vue'
import EmailMsg from '../components/messaging/EmailMsg.vue'

export default Vue.extend({
  components: {
    CmsSwitch,
    EmailMsg
  }
})
</script>

<style scoped>

</style>
