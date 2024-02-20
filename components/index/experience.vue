<template>
  <div class="min-h-screen py-16">
    <div
      class="border border-neutral items-center gap-1 w-fit flex rounded-full py-1 px-4 mb-5"
    >
      <LucideBriefcase :size="18" class="text-accent" />
      <div class="uppercase text-sm font-light">Experience</div>
    </div>
    <div class="text-3xl font-semibold mb-4">Experience</div>
    <!-- list experience -->
    <div class="flex gap-12 group" v-for="(exp, i) in experiences" :key="i">
      <div class="flex flex-col items-center">
        <lucideCircle
          :size="12"
          class="fill-neutral stroke-none group-hover:fill-secondary"
        />
        <div class="grow w-px bg-neutral"></div>
      </div>

      <div class="mb-10">
        <div class="group-hover:text-secondary">
          <!-- TODO redeable data -->
          {{ exp.readableStartDate }} - {{ exp.readableEndDate }}
        </div>
        <div class="flex flex-col gap-4">
          <!-- TODO ubah sesuai kebutuhan (mana yang harus pertama) -->
          <div>
            <div class="text-2xl md:text-4xl font-semibold mt-5 mb-3">{{ exp.company }}</div>
            <div class="text-light" >
              {{ exp.title }}
            </div>
          </div>
          <div>
            <div class="font-semibold mt-5">
              {{ exp.location }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  experiences: Object,
});
</script>

<style></style>
