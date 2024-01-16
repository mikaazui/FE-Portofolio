<template>
  <div class="flex-row justify-center p-16 h-screen">
    <h1 class="font-semibold text-slate-400 text-6xl">Index Page.</h1>
    <button @click="clickMe" class="btn mt-5">Click Me!</button>

  </div>
</template>

<script>
export default {
  setup() {
    const clickMe = () => {
      alert("you clicked me!");
    };
    return {clickMe};
  },
};
</script>
