<template>
  <div>
    <label class="swap swap-rotate" :v-model="colorMode.preference">

      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" class="theme-controller" value="retro" />

      <!-- sun icon -->
      <LucideSun class="swap-off" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" />
      <!-- moon icon -->
      <LucideMoon class="swap-on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" />

    </label>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const themes = [
  'system',
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];

</script>

<style></style>