<template>
  <div class="flex justify-center">
    <div id='firebaseui-auth'>
      <div id="fb-root"></div>
      <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="true" data-use-continue-as="false" data-width=""></div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
export default {
  name: 'login',
  data () {
    return {
      user: null
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      }
    })
  },
  mounted () {
    let ui = firebaseui.auth.AuthUI.getInstance()
    if (!ui) {
      ui = new firebaseui.auth.AuthUi(firebase.auth())
    }
    const uiConfig = {
      signInSuccessUrl: '/profile',
      signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID]
    }
    ui.start('#firebaseui-auth', uiConfig)
  }
}
</script>

<style>

</style>
