<template>
  <div>
    <label class="swap swap-rotate" :v-model="colorMode.preference">

      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" class="theme-controller" value="light" />

      <!-- sun icon -->
      <LucideSun class="swap-on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" />
      <!-- moon icon -->
      <LucideMoon class="swap-off" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" />

    </label>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style></style>