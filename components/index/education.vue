<template>
  <div class="min-h-screen py-16">
    <div
      class="border border-neutral items-center gap-1 w-fit flex rounded-full py-1 px-4 mb-5"
    >
      <LucideSchool :size="18" class="text-accent" />
      <div class="uppercase text-sm font-light">Education</div>
    </div>
    <div class="text-3xl font-semibold text-white mb-4">
      Education
    </div>
    <!-- list education -->
    <div class="flex md:gap-12 group" v-for="n in 2" :key="n">
      <div class="flex flex-col items-center">
        <lucideCircle :size="12" class="fill-neutral stroke-none group-hover:fill-secondary" />
        <div class="grow w-px bg-neutral"></div>
      </div>

      <div class="mb-10">
        <div class="group-hover:text-secondary">2020 - Present</div>
        <div class="flex flex-col gap-4">
          <div>
            <div class="text-4xl font-semibold mt-5">framer and Developer</div>
            <div class="text-light">Brunodee Agency</div>
          </div>
          <div>
            <div class="text-4xl font-semibold mt-5">Front End</div>
            <div class="text-light">Brunodee Agency</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style></style>
