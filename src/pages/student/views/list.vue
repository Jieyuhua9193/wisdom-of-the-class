<template>
  <div class="student-list">
    <SearchBar @onSearch="onSearch"/>
    <StudentTable :keyword="keyword"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchBar from '../components/SearchBar.vue';
import StudentTable from '../components/StudentTable.vue'

export default Vue.extend({
  data() {
    return {
      keyword: null
    }
  },
  methods: {
    onSearch(keyword: any) {
      this.keyword = keyword
    }
  },
  components: {
    SearchBar,
    StudentTable
  },
})
</script>

<style scoped>

</style>
