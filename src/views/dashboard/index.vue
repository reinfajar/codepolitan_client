<template>
  <section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 v-if="balance.status" class="sm:text-3xl text-2xl font-medium title-font mb-2 text-green-400">{{ balance.bal }}</h1>
      <h1 v-else class="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-400">{{ balance.bal }}</h1>
      <p class="lg:w-1/2 w-full leading-relaxed text-white">Balance left in your Account</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <Card v-for="(table, x) in tables" :key="x" :data="table" />
    </div>
    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      <router-link to="/new" class="mr-5 hover:text-gray-900">Add New</router-link>
    </button>
  </div>
</section>
</template>

<script>
import Card from './component/card'
export default {
  components: {
    Card
  },
  computed: {
    tables () {
      return this.$store.state.data.tableData
    },
    balance () {
      let sum = 0
      const table = this.$store.state.data.tableData
      table.forEach(el => {
        if (el.type === 'income') {
          sum = sum + Number(el.balance)
        } else if (el.type === 'expense') {
          sum = sum - Number(el.balance)
        }
      })
      let status = false
      if (sum >= 0) {
        status = true
      }
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR'
      })
      return {
        bal: formatter.format(sum),
        status
      }
    }
  }
}
</script>

<style>

</style>
