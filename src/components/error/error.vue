<template>
  <div class="bg-red-100 border border-red-400 text-red-700 container px-5 py-3 mx-auto rounded relative" role="alert">
    <strong class="font-bold">Something has happened!</strong>
    <div v-if="Array.isArray(errors)">
      <span class="block sm:inline" v-for="(error, x) in errors" :key="x">{{ error }}</span>
    </div>
    <div v-else>
      <span class="block sm:inline">{{ errors }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  computed: {
    errors () {
      return this.$store.state.data.error.message
    }
  }
}
</script>

<style>

</style>
