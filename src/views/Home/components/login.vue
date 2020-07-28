<template>
  <div class="flex justify-center">
    <div id='firebaseui-auth-container' @click.prevent="login">
      <!-- <a href="#" @click.prevent="login('facebook')">
        <img src="../../../assets/fb.png" width="300" height="100">
      </a> <br>
      <a href="#" @click.prevent="login('google')">
        <img src="../../../assets/GoogleSignUpDark.png" width="300" height="100"></a> -->
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
export default {
  name: 'login',
  data () {
    return {
    }
  },
  mounted () {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: (authResult) => {
          console.log(authResult)
          return true
        }
      },
      signInSuccessUrl: '/dashboard',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ]
    }
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  },
  methods: {
    // login (x) {
    //   this.$store.commit('SET_LOADING', true)
    //   let provider = null
    //   if (x === 'facebook') {
    //     provider = new firebase.auth.FacebookAuthProvider()
    //   } else if (x === 'google') {
    //     provider = new firebase.auth.GoogleAuthProvider()
    //   }
    //   firebase.auth().signInWithPopup(provider)
    //     .then(async (result) => {
    //       if (result.credential) {
    //         const token = result.credential.accessToken
    //         localStorage.setItem('token', token)
    //       }
    //       this.$store.dispatch('fetchUser', result.user)
    //       this.$store.dispatch('fetchData', result.user.uid)
    //       this.$store.commit('SET_ERROR', false)
    //       this.$router.push('/dashboard')
    //     })
    //     .catch((error) => {
    //       const payload = {
    //         code: error.code,
    //         message: error.message,
    //         email: error.email,
    //         credential: error.credential
    //       }
    //       this.$store.commit('SET_ERROR', payload)
    //     })
    // }
  }
}
</script>

<style>

</style>
