<template>
  <div class="drawer drawer-end">
    <input v-model="show_drawer" id="my-drawer-4" type="checkbox" class="drawer-toggle" />

    <div class="drawer-side overflow-x-hidden text-accent">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="p-14 w-80 min-h-full bg-base-200">
        <div class="text-2xl mb-4 px-6 text-white">Menu</div>
        <ul class="menu">
          <!-- MOBILE DRAWER -->
          <li>
            <NuxtLink v-for="(menu, i) in menus" :key="i" @click="show_drawer = !show_drawer"
              :to="{ path: menu.path, hash: menu.hash }" class="flex items-center gap-3">
              <component :is="menu.icon" :size="18" class="text-secondary" />
              <div>{{ menu.title }}</div>
            </NuxtLink>
          </li>
        </ul>

        <!-- social -->
        <div class="p-6">
          <div class="text-2xl my-4 text-white">Social</div>
          <div class="flex gap-4">
            <a href="https://www.instagram.com/mikaazui/" target="_blank">
              <lucideInstagram :size="18" class="text-secondary" />
            </a>
            <a href="https://twitter.com/myrfellon" target="_blank">
              <lucideTwitter :size="18" class="text-secondary" />
            </a>
            <a href="https://github.com/mikaazui" target="_blank">
              <lucideGithub :size="18" class="text-secondary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  toggleDrawer: Boolean,
  menus: Array
});
console.log(props.toggleDrawer);

const show_drawer = ref(props.toggleDrawer);
//use watch effect to handle problem
watchEffect(() => {
  show_drawer.value = props.toggleDrawer;
});
</script>

<style></style>
