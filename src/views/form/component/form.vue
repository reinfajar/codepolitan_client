<template>
  <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Name
          </label>
          <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
          placeholder="Name"
          type="text"
          v-model="name"
          autofocus>
        </div>
        <div class="p-2 w-1/2">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Balance
          </label>
          <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
          placeholder="Balance"
          type="number"
          v-model="balance">
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Type of Money
          </label>
          <div class="relative">
            <select v-model="type" class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>
        <div class="p-2 w-full">
          <textarea class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
          placeholder="Description"></textarea>
        </div>
        <div class="p-2 w-full">
          <button @click.prevent="submit" class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'form',
  data () {
    return {
      name: '',
      balance: Number,
      type: '',
      description: ''
    }
  },
  methods: {
    submit () {
      const payload = {
        name: this.name,
        balance: this.balance,
        type: this.type,
        description: this.description
      }
      console.log(payload)
    }
  }
}
</script>

<style>

</style>
