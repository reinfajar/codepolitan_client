<template>
  <div class="flex justify-center">
    <div id='firebaseui-auth'>
      <div id="fb-root"></div>
      <a href="#" @click.prevent="login('facebook')">login with fb</a> <br>
      <a href="#" @click.prevent="login('google')">login with google</a>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    login (x) {
      let provider = null
      if (x === 'facebook') {
        provider = new firebase.auth.FacebookAuthProvider()
      } else if (x === 'google') {
        provider = new firebase.auth.GoogleAuthProvider()
      }
      firebase.auth().signInWithPopup(provider)
        .then(async (result) => {
          if (result.credential) {
            const token = result.credential.accessToken
            localStorage.setItem('token', token)
          }
          this.$store.dispatch('fetchUser', result.user)
        })
        .catch((error) => {
          const payload = {
            code: error.code,
            message: error.message,
            email: error.email,
            credential: error.credential
          }
          this.$store.commit('SET_ERROR', payload)
        })
    }
  }
}
</script>

<style>

</style>
