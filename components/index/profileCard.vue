<template>
  <div
    class="md:fixed min-h-screen md:flex items-center md:w-[25%] lg:w-[26%] xl:w-[24%] p-2 rounded-xl py-24"
  >
    <div class="p-8 w-full rounded-3xl flex-col gap-6 border border-accent">
      <div class="justify-between flex items-end">
        <div class="text-3xl font-bold">
          {{ profile.firstName }} {{ profile.lastName }}
        </div>
        <div class="text-right">{{ profile.job }}</div>
      </div>

      <div
        class="aspect-square m-4 rounded-2xl flex justify-center items-center bg-base-300"
      ></div>
      <!-- EMAIL & CONTACT -->
      <div class="text-center font-bold">
        <div>{{ profile.email }}</div>
        <div>{{ profile.city }}, {{ profile.country }}</div>
      </div>
      <div class="text-center mt-5 text-white opacity-50">
        &copy;{{year}} {{profile.firstName}}, All Rights Reserved
      </div>

      <!-- social buttons -->
      <div class="flex justify-between p-4">
        <div
          class="btn-outline btn-circle btn border-neutral hover:bg-transparent hover:border-green"
        >
          <lucideInstagram :size="20" class="text-secondary" />
        </div>
        <div
          class="btn-outline btn-circle btn border-neutral hover:bg-transparent hover:border-green"
        >
          <LucideTwitter :size="20" class="text-secondary" />
        </div>
        <div
          class="btn-outline btn-circle btn border-neutral hover:bg-transparent hover:border-green"
        >
          <LucideGithub :size="20" class="text-secondary" />
        </div>
        <div
          class="btn-outline btn-circle btn border-neutral hover:bg-transparent hover:border-green"
        >
          <LucideGlobe :size="20" class="text-secondary" />
        </div>
      </div>
      <!-- HIRE ME -->
      <button class="btn btn-success w-full">
        <lucideMail :size="20" />
        <div>HIRE ME</div>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  profile: Object,
});

const year = new Date().getFullYear()
</script>

<style></style>
