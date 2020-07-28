import Vue from 'vue'
import Vuex from 'vuex'

import userStatus from './user/userStatus'
import data from './data/data'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userStatus,
    data
  }
})
