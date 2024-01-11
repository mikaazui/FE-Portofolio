<template>
  <div>
    <div class="flex justify-center min-h-screen p-10">
      <h1 class="font-bold text-6xl text-center my-24 text-slate-700">
        {{ title }}
      </h1>
    </div>

    <div v-if="showModel">
      <Modal
        :header="header"
        :text="text"
        theme="sale"
        @close="toggleShowModal"
      />
    </div>
    <button
      class="fixed top-0 right-0 m-10 p-2 text-white font-semibold rounded-md bg-green-400"
      @click="showModel = !showModel"
    >
      <span> show Modal</span>
    </button>
  </div>
</template>

<script>
import Modal from "../pages/components/Modal.vue";
export default {
  name: "lesson",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App",
      header: "Sign up for a Giveaway!",
      text: "make sure to participate!",
      showModel: false,
    };
  },
  methods: {
    toggleShowModal() {
      this.showModel = !this.showModel;
    },
  },
};
</script>

<style lang="scss" scoped></style>
