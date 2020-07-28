import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
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
// const firebaseConfig = {
//   apiKey: process.env.VUE_APP_apiKey,
//   authDomain: process.env.VUE_APP_authDomain,
//   databaseURL: process.env.VUE_APP_databaseURL,
//   projectId: process.env.VUE_APP_projectId,
//   storageBucket: process.env.VUE_APP_storageBucket,
//   messagingSenderId: process.env.VUE_APP_messagingSenderId,
//   appId: process.env.VUE_APP_appId,
//   measurementId: process.env.VUE_APP_measurementId
// }
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const user = db.collection('users')

// export utils/refs
export {
  db,
  auth,
  user
}
