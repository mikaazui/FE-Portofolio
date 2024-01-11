<template>
  <div>
    <div class="flex justify-center min-h-screen">
      <h1 class="font-bold text-6xl text-center my-24 text-slate-700">{{title}}</h1>
    </div>

    <div v-if="showModel">
      <Modal :header="header" :text="text" theme="sale"/>
    </div>
  </div>
</template>

<script>
import Modal from '../pages/components/Modal.vue';
export default {
  name: 'lesson 1',
  components: { Modal },
  data() {
    return {
      title: "My First Vue App",
      header: "Sign up for a Giveaway!",
      text: "make sure to participate!",
      showModel: false 

    };
  },
};
</script>

<style lang="scss" scoped></style>
