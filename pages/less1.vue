<template>
  <main class="min-h-screen">
    <header>
      <div class="flex justify-between p-6">
        <button
        class="p-2 text-white font-semibold rounded-md bg-green-400"
        @click="showModal = !showModal"
        >
        <span> show Modal </span>
      </button>
      <!-- separator -->
      <button
        class="p-2 text-white font-semibold rounded-md bg-green-400"
        @click="showModal2 = !showModal2"
      >
        <span> show Modal 2</span>
      </button>
    </div>
    </header>
    <div class="flex items-center justify-center">
      <div class="p-10">
        <h1 class="font-bold text-6xl text-slate-700">
          {{ title }}
        </h1>
      </div>
    </div>

    <div v-if="showModal">
      <Modal theme="sole" @close="toggleShowModal">
        <template v-slot:links>
          <div class="flex gap-2 justify-center">
            <a href="#" class="cursor-pointer">Sign up now</a>
            <a href="#" class="cursor-help">More info</a>
          </div>
        </template>
        <h1 class="inline-block font-semibold text-3xl pb-3">
          Ultimate Give Away
        </h1>
        <p class="text-inherit pb-2">dont to forget to participate</p>
      </Modal>
    </div>

    <!-- separator -->

    <div v-if="showModal2">
      <Modal theme="sale" @close="toggleShowModal2">
        <template v-slot:links>
          <div class="flex gap-2 justify-center">
            <a href="#" class="cursor-pointer">Sign up now</a>
            <a href="#" class="cursor-help">More info</a>
          </div>
        </template>
        <h1 class="inline-block font-semibold text-3xl pb-3">
          Sign up for newslater
        </h1>
        <p class="text-inherit pb-2">dont miss our latest information!</p>
      </Modal>
    </div>
  </main>
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
      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    toggleShowModal() {
      this.showModal = !this.showModal;
    },

    toggleShowModal2() {
      this.showModal2 = !this.showModal2;
    },
  },
};
</script>

<style lang="scss" scoped></style>
