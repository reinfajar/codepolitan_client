import * as fb from '../../firebase'

const store = {
  state: {
    isLogin: false,
    userData: {}
  },
  mutations: {
    SET_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_USERDATA (state, payload) {
      state.userData = payload
    }
  },
  actions: {
    async fetchUser ({ commit }, user) {
      const payload = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email
      }
      await fb.user.doc(user.uid).set(payload, { merge: true })
      commit('SET_USERDATA', payload)
      commit('SET_LOGIN', true)
    }
  }
}

export default store
