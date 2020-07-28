<template>
  <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2">
            Name
          </label>
          <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
          placeholder="Name"
          type="text"
          v-model="name"
          autofocus>
        </div>
        <div class="p-2 w-1/2">
          <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2">
            Balance
          </label>
          <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
          placeholder="Balance"
          type="number"
          v-model="balance">
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2">
            Type of Money
          </label>
          <div class="relative">
            <select v-model="type" class="block w-full bg-gray-200 border border-gray-200 text-white-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>
        <div class="p-2 w-full">
          <textarea v-model="description" class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
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
  name: 'inputForm',
  data () {
    return {
      name: '',
      balance: 0,
      type: '',
      description: ''
    }
  },
  methods: {
    submit () {
      const payload = this.$store.state.userStatus.userData
      payload.data = this.$store.state.data.tableData
      const error = {
        status: false,
        message: []
      }
      if (this.name.length === 0 || this.type.length === 0) {
        error.status = true
        error.message.push('Data cant be empty')
      }
      if (Number(this.balance) <= 0 || !this.validate_money(this.balance)) {
        error.status = true
        error.message.push('Balance must be bigger than 0 and only number')
      }
      if (!error.status) {
        payload.data.unshift({
          name: this.name,
          balance: this.balance,
          type: this.type,
          description: this.description,
          date: new Date().toDateString()
        })
        this.$store.commit('SET_ERROR', false)
        this.$store.dispatch('postData', payload)
        this.$router.go(-1)
      } else {
        this.$store.commit('SET_ERROR', error)
      }
    },
    validate_money (i) {
      const regex = /^\d+$/
      return regex.test(i)
    }
  }
}
</script>

<style>

</style>
