<template>
  <div class="min-h-screen flex text-accent">
    <!-- MAIN CONTENT -->
    <!-- PROFILE CARD -->
    <div class="min-h-screen grow">
      <slot />
    </div>
    <!-- SIDEMENU -->
    <IndexDefaultlayoutSidemenu :menus="menus"/>
    <!-- sidebar toggle -->
    <div class="z-10 md:hidden drawer-content fixed right-0 mt-8 mr-8">
      <label for="my-drawer-4" class="btn btn-circle btn-outline">
        <lucideMenu :size="18" />
      </label>
    </div>
  </div>
  <IndexDefaultlayoutMenudrawer :toggleDrawer="toggleDrawer" :menus="menus" />
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
    hash: "#experience",
    title: "Experience",
    icon: resolveComponent("LucideBriefcase"),
  },
  {
    path: "/",
    hash: "#education",
    title: "Education",
    icon: resolveComponent("LucideSchool"),
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
