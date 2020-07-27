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
    }
  },
  actions: {}
}

export default store
