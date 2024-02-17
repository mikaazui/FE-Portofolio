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
    <button class="btn btn-neutral" @click="getUser">click</button>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
})
const authStore = useAuthStore()
const getUser = async() => {
    await authStore.getUser()
}
</script>