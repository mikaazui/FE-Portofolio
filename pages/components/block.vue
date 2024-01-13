<template>
  <div
    v-if="showBlock"
    @click="stopTimer"
    class="w-[400px] h-[200px] rounded-3xl bg-slate-500 text-white flex justify-center items-center m-[40px]"
  >
    click me
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0
    };
  },
  mounted() {
    console.log("component mounted");
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer()
      console.log(this.delay)
    }, this.delay)
  },
  updated(){
    console.log('component updated')
  },
  unmounted(){
    console.log('component unmounted')
  },
  methods: {
    startTimer(){
      this.timer = setInterval(() => {
        this.reactionTime += 10
      }, 10)

    },
    stopTimer(){
      clearInterval(this.timer)
      this.$emit('end', this.reactionTime)
      console.log(this.reactionTime)
    }
  }
};
</script>

<style></style>
