<template>
  <section class="text-gray-700 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">New MoneyTory</h1>
    </div>
    <inputForm />
  </div>
</section>
</template>

<script>
import inputForm from './component/form'
export default {
  components: {
    inputForm
  }
}
</script>

<style>

</style>
