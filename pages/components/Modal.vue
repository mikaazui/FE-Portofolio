<template>
  <div class="Backdrop" @click="closeModal">
    <div class="Modal" :class="{SaleModal: theme === 'sale' }">
      <h1 class=" inline-block font-semibold text-3xl pb-3">{{header}}</h1>
      <p class="text-inherit pb-4 border-b-2">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'text', 'theme'],
  methods: {
    closeModal(){
      this.$emit('close')
    }
  }

}

</script>

<style>

</style>