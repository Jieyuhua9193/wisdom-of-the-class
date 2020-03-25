<template>
  <div class="student-list">
    <SearchBar/>
    <StudentTable/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchBar from '../components/SearchBar.vue';
import StudentTable from '../components/StudentTable.vue'

export default Vue.extend({
  components: {
    SearchBar,
    StudentTable
  }
})
</script>

<style scoped>

</style>
