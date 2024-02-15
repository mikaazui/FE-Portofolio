<template>
    <div>
        ini halaman index
    </div>
    <div>
        name:{{ authStore.user.name }}
        email:{{ authStore.user.email }}
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin'
})
const authStore = useAuthStore()
</script>