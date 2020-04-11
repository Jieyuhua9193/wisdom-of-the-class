<template>
  <div class="student-list">
    <SearchBar @onSearch="onSearch"/>
    <UsersTable :keyword="keyword"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchBar from '../components/users/SearchBar.vue';
import UsersTable from '../components/users/UsersTable.vue'

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
    UsersTable
  },
})
</script>

<style scoped>

</style>
