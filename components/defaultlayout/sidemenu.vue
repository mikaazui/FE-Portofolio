<template>
  <div class="min-h-screen w-28 flex-none max-md:hidden">
    <div class="fixed min-h-screen flex items-center">
      <div class="border-2 border-neutral-600 p-5 rounded-full flex flex-col gap-6">
        <NuxtLink v-for="(menu, i) in menus" :key="i" :to="{ path: menu.path, hash: menu.hash }"
          class="tooltip tooltip-left" :data-tip="menu.title">
          <component :is="menu.icon" size="18" class="text-secondary" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  menus: Array
});
</script>

<style></style>