<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
import navbar from './components/Navbar/navbar'
export default {
  name: 'app',
  components: {
    navbar
  },
  created () {
    this.$store.commit('SET_LOADING', true)
    firebase.auth().onAuthStateChanged(user => {
      if (user && localStorage.token) {
        this.$store.dispatch('fetchUser', user)
        this.$store.commit('SET_LOGIN', true)
        this.$store.commit('SET_LOADING', false)
      } else {
        this.$store.commit('SET_LOGIN', false)
        this.$store.commit('SET_LOADING', false)
      }
    })
  },
  computed: {
    loading () {
      return this.$store.data.loading
    }
  }
}
</script>

<style>
/* Small (sm) */
@media (min-width: 640px) { /* ... */ }

/* Medium (md) */
@media (min-width: 768px) { /* ... */ }

/* Large (lg) */
@media (min-width: 1024px) { /* ... */ }

/* Extra Large (xl) */
@media (min-width: 1280px) { /* ... */ }
</style>
