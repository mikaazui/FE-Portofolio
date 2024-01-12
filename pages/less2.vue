<template>
  <container class="min-h-screen p-16">
    <div class="flex flex-col items-center gap-3">
      <h1 class="font-semibold text-5xl text-center text-slate-600">
        Reaction Timer
      </h1>
      <div>
        <button @click="start" class="bg-slate-300 rounded-md px-5 py-1.5">play</button>
      </div>
    </div>
  </container>
</template>

<script>
export default {
  name: "less1",
  components: { },
  data () {
    return {
      isPlaying: true,
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
