<template>
  <div id="app">
    <div>
      <div v-if="showContent">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
        <p>{{ name }} - {{ age }}</p>
        
        <button v-on:click="age--">decrease age</button>
        <button v-on:click="age++">increase age</button>
        <br/>
        <button v-on:click="title = 'ini title'">
            click here to change title back
        </button>
        <button v-on:click="title = 'something else'">
            click here to change title
        </button>
        <br/>
    </div>
      <button v-on:click="toggleShowContent">
        <span v-if="showContent"> hide content </span>
        <span v-else> show content </span>
    </button>
    <p v-show="!showContent">content hided</p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showContent: true,
      title: "ini title",
      content: "ini content",
      name: "john doe",
      age: 20,
      count: ref(0),
    };
  },
  methods: {
    toggleShowContent() {
      this.showContent = !this.showContent;
    },
  },
};
</script>

<style lang="scss" scoped></style>
