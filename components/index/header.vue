<template>
  <div class="flex items-center px-6 md:px-14 border-b border-b-neutral py-6">
    <button to="/#blog" class="text-4xl text-accent font-bold hover:bg-base-200 p-2 rounded-full duration-300" @click="back"> <lucideArrowLeft /> </button>
    <NuxtLink to="/#blog" class="px-4 text-4xl text-accent font-bold">{{ fullname }}</NuxtLink>
  </div>
</template>

<script setup>
//fetch profile
const useProfile = useState('profile')
const profile = useProfile.value;
const fullname = computed(() => {
    return `${profile.firstName} ${profile.lastName}`
})

const back = () => {
    window.history.back()
}
</script>

<style></style>