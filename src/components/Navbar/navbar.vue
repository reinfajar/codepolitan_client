<template>
  <header class="text-gray-700 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">MoneyTory</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center" v-if="login">
        <router-link to="/dashboard" class="mr-5 hover:text-gray-900">
          <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            List
          </button>
        </router-link>
        <router-link to="/new" class="mr-5 hover:text-gray-900">
          <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            Add New
          </button>
        </router-link>
        <a @click.prevent="logout" v-if="login">
          <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            Logout
          </button>
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'navbar',
  computed: {
    login () {
      return this.$store.state.userStatus.isLogin
    }
  },
  methods: {
    logout (e) {
      e.stopPropagation()
      firebase.auth().signOut()
      localStorage.removeItem('token')
      localStorage.removeItem('firebaseui::rememberedAccounts')
      this.$store.commit('SET_USERDATA', {})
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>

<style>

</style>
