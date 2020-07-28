import * as fb from '../../firebase'

const store = {
  state: {
    loading: false,
    error: null,
    tableData: []
  },
  mutations: {
    SET_LOADING (state, payload) {
      state.loading = payload
    },
    SET_ERROR (state, payload) {
      state.error = payload
    },
    SET_TABLEDATA (state, payload) {
      state.tableData = payload
    }
  },
  actions: {
    async fetchData ({ commit }, payload) {
      const result = await fb.user.doc(payload).get()
      if (result.data().data) {
        commit('SET_TABLEDATA', result.data().data)
      }
      commit('SET_LOADING', false)
    },
    async postData ({ commit, dispatch }, payload) {
      commit('SET_LOADING', true)
      await fb.user.doc(payload.uid).set(payload)
      dispatch('fetchData', payload.uid)
    }
  }
}

export default store
