<template>
    <div>
        ini halaman index
    </div>
    <div>
        name: {{ authStore.user.name }}
    </div>
    <div>
        email: {{ authStore.user.email }}
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
})
const authStore = useAuthStore()
authStore.getUser()

</script>