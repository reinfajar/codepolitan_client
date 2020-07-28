<template>
  <div class="home">
    <section class="text-gray-700 body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Login</h1>
        </div>
        <Login />
      </div>
    </section>
  </div>
</template>

<script>
import Login from './components/login'
export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>
