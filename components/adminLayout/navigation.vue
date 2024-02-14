<template>
  <ul class="menu p-4 w-64 min-h-full text-base-content side-menu max-lg:bg-base-200">
    <div class="px-6 py-4 font-light text-xl">Main Menu</div>
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
    title: "Project",
    to: "/admin/project",
    icon: resolveComponent("LucideNotebook-tabs"),
  },
  {
    title: "Profile",
    to: "/admin/profile",
    icon: resolveComponent("LucideUser"),
  }
];

</script>