<template>
    <!-- ga punya children -->
    <li v-if="!menu.children">
        <NuxtLink :to="menu.to" class="p-4 mt-1">
            <component :is="menu.icon" :size="18" />{{ menu.title }}
        </NuxtLink>
    </li>

    <!-- punya children -->
    <li v-if="menu.children">
        <details closed>
            <summary class="p-4">
                <component :is="menu.icon" :size="18" /> {{ menu.title }}
            </summary>

            <!-- ul untuk children -->
            <ul>
                <template v-for="subMenu in menu.children">
                    <!-- metode recursuive/ memanggil dirinya sendiri -->
                    <AdminLayoutNavItems :menu="subMenu" />
                </template>
            </ul>
        </details>
    </li>
</template>

<script setup>
defineProps({
    menu: Object
});

</script>