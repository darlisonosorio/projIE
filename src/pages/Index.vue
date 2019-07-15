<script>
import Results from './Results'
import { IStudents } from 'src/store/modules/students'

export default {
  components: { Results },
  name: 'PageIndex',
  computed: {
    ...IStudents.getters
  },
  methods: {
    ...IStudents.actions
  }
}
</script>

<template>
  <q-page class="column flex-center">

    <q-input
      class=""
      type="search"
      placeholder="Search:"
      :value="queryText"
      @input="updateQueryText"
      @keydown.enter="searchStudents" />

    <results />
  </q-page>

</template>

<style>
</style>
