<template>
  <div class="xl:w-1/3 md:w-1/2 p-4 min-w-full sm:min-w-full md:min-w-full lg:min-w-full xl:min-w-0">
    <div class="border border-gray-300 p-6 rounded-lg overflow-auto">
      <h1 v-if="data.type === 'income'" class="sm:text-3xl text-2xl font-medium title-font mb-2 text-green-400 w-full">
        {{ balance }}</h1>
      <h1 v-else class="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-400 w-full">
        {{ balance }}
      </h1>
      <div>
        <h1 class="text-lg text-white font-medium title-font mb-2 overflow-y-auto h-20">{{ data.name }}</h1>
      </div>
      <div>
        <h3 class="leading-relaxed text-white">description: </h3>
        <h3 class="leading-relaxed text-white overflow-y-auto h-20">{{ data.description }}</h3>
      </div>
      <h3 class="leading-relaxed text-white">date: {{ data.date }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  computed: {
    balance () {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR'
      })
      return formatter.format(this.data.balance)
    }
  }
}
</script>

<style>

</style>
