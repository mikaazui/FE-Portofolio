<template>
    <div class="min-h-screen flex flex-col items-center gap-3">
      <h1 class="font-semibold text-5xl text-center text-slate-600">
        Reaction Timer
      </h1>
        <button @click="start" class="bg-slate-300 rounded-md px-5 py-1.5">play</button>
      <block v-if="isPlaying" :delay="delay"/>
    </div>
</template>

<script>
import block from "../pages/components/block.vue"
export default {
  name: "less2",
  components: { block },
  data () {
    return {
      isPlaying: false,
      delay: null,

    }
  },

  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      console.log(this.delay)

    }
   }
}
</script>

<style></style>
