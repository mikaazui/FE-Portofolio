<template>
  <ul class="w-64 min-h-full p-4 menu text-base-content side-menu max-lg:bg-base-200">
    <div class="px-6 py-4 text-xl font-light">Main Menu</div>
    <template v-for="menu in menus">
      <AdminLayoutNavItems :menu="menu" />
    </template>
  </ul>
</template>

<script setup>
const menus = [
  {
    title: "Dashboard",
    to: "/admin",
    icon: resolveComponent("LucideLayoutDashboard"),
  },
  {
    title: "Profile",
    to: "/admin/profile",
    icon: resolveComponent("LucideUser"),
  },
  {
    title: "Education",
    to: "/admin/education",
    icon: resolveComponent("LucideSchool"),
  },
  {
    title: "Experience",
    to: "/admin/experience",
    icon: resolveComponent("LucideBriefcase"),
  },
  {
    title: "Skills",
    to: "/admin/skills",
    icon: resolveComponent("LucideBoxes"),
  },
  {
    title: "Blog",
    to: "/admin/blogs",
    icon: resolveComponent("LucideFileText"),
  },
  {
    title: "Project",
    to: "/admin/projects",
    icon: resolveComponent("LucideNotebook-tabs"),
  },
];

</script>