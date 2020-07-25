import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/tailwind.css'

import firebase from 'firebase'

Vue.config.productionTip = false

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyBr3Qcm80CfuDDsuYRToxVmhTwO5NoLPRU',
  authDomain: 'codepolitanserver.firebaseapp.com',
  databaseURL: 'https://codepolitanserver.firebaseio.com',
  projectId: 'codepolitanserver',
  storageBucket: 'codepolitanserver.appspot.com',
  messagingSenderId: '778516975402',
  appId: '1:778516975402:web:92a6e7fa5bced87b861853',
  measurementId: 'G-WF8SDL86VF'
}

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
