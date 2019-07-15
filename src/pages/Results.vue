<script>
import { IStudents } from 'src/store/modules/students'

export default {
  computed: {
    ...IStudents.getters
  }
}
</script>

<template>
  <q-list>
    <q-item v-for="(item, idx) of results" :key="idx">
      {{ `${item.name} - ${item.age}` }}
    </q-item>
  </q-list>
</template>
