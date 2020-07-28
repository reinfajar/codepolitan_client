<template>
  <div id="app" class="bg-gray-900">
    <navbar />
    <error v-if="isError"/>
    <loading v-if="loading" />
    <router-view v-else/>
  </div>
</template>

<script>
import firebase from 'firebase'
import navbar from './components/Navbar/navbar'
import loading from './components/loader/loading'
import error from './components/error/error'
export default {
  name: 'app',
  components: {
    navbar,
    loading,
    error
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem('token', user.refreshToken)
        this.$store.dispatch('fetchUser', user)
        this.$store.dispatch('fetchData', user.uid)
        this.$store.commit('SET_LOGIN', true)
        this.$store.commit('SET_LOADING', false)
        this.$router.push('/dashboard')
      } else {
        this.$store.commit('SET_LOGIN', false)
        this.$store.commit('SET_LOADING', false)
      }
    })
  },
  computed: {
    loading () {
      return this.$store.state.data.loading
    },
    isError () {
      return this.$store.state.data.error
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
