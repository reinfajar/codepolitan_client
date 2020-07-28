<template>
  <div class="xl:w-1/3 md:w-1/2 p-4 min-w-full sm:min-w-full md:min-w-full lg:min-w-full xl:min-w-0">
    <div class="border border-gray-300 p-6 rounded-lg overflow-auto">
      <div class="w-10 h-10 inline-flex items-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </div>
      <h1 v-if="data.type === 'income'" class="sm:text-3xl text-2xl font-medium title-font mb-2 text-green-400 w-full">
        {{ balance }}</h1>
      <h1 v-else class="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-400 w-full">
        {{ balance }}
      </h1>
      <div>
        <h1 class="text-lg text-gray-900 font-medium title-font mb-2 overflow-y-scroll h-20">{{ data.name }}</h1>
      </div>
      <div>
        <h3 class="leading-relaxed text-base">description: </h3>
        <h3 class="leading-relaxed text-base overflow-y-scroll h-20">{{ data.description }}</h3>
      </div>
      <h3 class="leading-relaxed text-base">date: {{ data.date }}</h3>
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
