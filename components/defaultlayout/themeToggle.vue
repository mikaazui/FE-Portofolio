<template>
  <div>
    <label class="swap swap-rotate">
      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" class="theme-controller" value="light" v-model="checked" />
      <!-- sun icon -->
      <LucideSun class="swap-on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" />
      <!-- moon icon -->
      <LucideMoon class="swap-off" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" />
    </label>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const checked = ref(colorMode.preference === 'dark');

// Watch for changes in the checked value and update the color mode accordingly
watch(checked, (value) => {
  const newPreference = value ? 'dark' : 'light';
  colorMode.preference = newPreference;
  localStorage.setItem('colorMode', newPreference);
});

// Load theme preference from localStorage when the component is mounted
onMounted(() => {
  const storedColorMode = localStorage.getItem('colorMode');
  if (storedColorMode) {
    checked.value = storedColorMode === 'dark';
  }
});
</script>

<style></style>
