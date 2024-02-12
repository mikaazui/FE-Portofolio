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
    title: "Home",
    to:"/admin",
    icon: resolveComponent("LucideHome"),
    children: [{
      title: "Dashboard",
      to: "/admin",
      icon: resolveComponent("LucideLayoutDashboard"),
    }]
  }
];

</script>