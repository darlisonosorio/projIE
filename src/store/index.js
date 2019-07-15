import Vue from 'vue'
import Vuex from 'vuex'

import students from './modules/students'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    students
  },
  strict: process.env.DEV
})

export default store
