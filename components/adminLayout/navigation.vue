<template>
    <ul class="menu p-4 w-64 min-h-full text-base-content side-menu max-lg:bg-base-200">
        <!-- Sidebar content here -->
        <div class="text-xl px-4 mb-2 pb-2 pt-2 font-light border-b border-slate-300">Main Menu</div>
        <li>
            <details closed>
                <summary>
                    <LucideLayoutDashboard :size="18" />
                    Dashboard
                </summary>
                <ul>
                    <template v-for="menu in menus">
                        <li>
                            <NuxtLink to="menu.to">
                                <component :is="menu.icon" :size="18" />{{ menu.title }}
                                <!-- <LucideLayoutDashboard :size="18" /> -->
                            </NuxtLink>
                        </li>
                    </template>
                </ul>
            </details>
        </li>

    </ul>
</template>

<script setup>
const menus = [
    {
        title: "Home",
        to: "/admin",
        icon: resolveComponent('LucideHome'),
    },
    {
        title: "Home",
        to: "/admin",
        icon: resolveComponent('LucideHome'),
    },
    {
        title: "Home",
        to: "/admin",
        icon: resolveComponent('LucideHome'),
        children: [
            {
                title: "Home",
                to: "/admin",
                icon: resolveComponent('LucideHome'),
            },

        ]
    },

]

</script>