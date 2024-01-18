<template>
  <div class="min-h-screen flex text-accent">
    <!-- MAIN CONTENT -->
    <!-- PROFILE CARD -->
    <div class="min-h-screen grow">
      <slot />
    </div>
    <!-- SIDEMENU -->
    <div class="min-h-screen w-28 flex-none max-md:hidden">
      <div class="fixed min-h-screen flex items-center">
        <div
          class="border-2 border-neutral-600 p-5 rounded-full flex flex-col gap-6"
        >
          <NuxtLink
            v-for="(menu, i) in menus"
            :key="i"
            :to="{ path: menu.path, hash: menu.hash }"
            class="tooltip tooltip-left"
            :data-tip="menu.title"
          >
            <component :is="menu.icon" size="18" class="text-secondary" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- sidebar toggle -->
    <div class="z-10 md:hidden drawer-content fixed right-0 mt-8 mr-8">
      <label for="my-drawer-4" class="btn btn-circle btn-outline">
        <lucideMenu :size="18" />
      </label>
    </div>
  </div>
  <div class="drawer drawer-end">
    <input
      v-model="toggleDrawer"
      id="my-drawer-4"
      type="checkbox"
      class="drawer-toggle"
    />

    <div class="drawer-side overflow-x-hidden text-accent">
      <label
        for="my-drawer-4"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <div class="p-14 w-80 min-h-full bg-base-200">
        <div class="text-2xl mb-4 px-6 text-white">Menu</div>
        <ul class="menu">
          <!-- MOBILE DRAWER -->
          <li>
            <NuxtLink
            v-for="(menu, i) in menus"
            :key="i"
              @click="toggleDrawer = !toggleDrawer"
              :to="{ path: menu.path, hash: menu.hash }"
              class="flex items-center gap-3"
            >
              <component :is="menu.icon" :size="18" class="text-secondary" />
              <div>{{menu.title}}</div>
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
import { resolveComponent } from "vue";

//toggle open/close drawer
const toggleDrawer = ref(false);

const menus = [
  {
    path: "/",
    hash: "#about",
    title: "About",
    icon: resolveComponent("LucideUserRound"),
  },
  {
    path: "/",
    hash: "#resume",
    title: "Resume",
    icon: resolveComponent("LucideBriefcase"),
  },
  {
    path: "/",
    hash: "#skills",
    title: "Skills",
    icon: resolveComponent("LucideBlocks"),
  },
  {
    path: "/",
    hash: "#project",
    title: "Project",
    icon: resolveComponent("LucideNotebook-tabs"),
  },
  {
    path: "/",
    hash: "#blog",
    title: "Blog",
    icon: resolveComponent("LucideMessageSquareText"),
  },
  {
    path: "/",
    hash: "#contact",
    title: "Contact",
    icon: resolveComponent("LucideContact"),
  },
];
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>
