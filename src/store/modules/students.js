import provider from 'src/providers/student-provider'
import { mapState, mapActions } from 'vuex'

export default {
  state: {
    queryText: '',
    results: null
  },
  mutations: {
    queryText (state, newValue) {
      state.queryText = newValue
    },
    results (state, newValue) {
      state.results = newValue
    }
  },
  actions: {
    updateQueryText ({ commit }, newQueryText) {
      commit('queryText', newQueryText)
    },
    async searchStudents ({ state, commit }) {
      try {
        const results = await provider.list(state.queryText)
        commit('results', results)
      } catch (e) {
        commit('results', [])
      }
    }
  },
  getters: {
    queryText: state => {
      return state.queryText
    },
    results: state => {
      return state.results
    }
  }
}

export const IStudents = {
  getters: {
    ...mapState({
      queryText: state => state.students.queryText,
      results: state => state.students.results
    })
  },
  actions: {
    ...mapActions([
      'updateQueryText',
      'searchStudents'
    ])
  }
}
