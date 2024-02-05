<template>
  <div class="flex justify-between my-4 border-b border-b-neutral pt-6 max-md:pt-20 pb-3">
    <NuxtLink to="/#blog" class="text-4xl font-bold">{{ fullname }}</NuxtLink>
  </div>
</template>

<script setup>
//fetch profile
const useProfile = useState('profile')
const profile = useProfile.value;
const fullname = computed(() => {
    return `${profile.firstName} ${profile.lastName}`
})
</script>

<style></style>