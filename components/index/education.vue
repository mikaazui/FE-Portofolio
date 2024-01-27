<template>
  <div class="min-h-screen py-16">
    <div
      class="border border-neutral items-center gap-1 w-fit flex rounded-full py-1 px-4 mb-5"
    >
      <LucideSchool :size="18" class="text-accent" />
      <div class="uppercase text-sm font-light">Education</div>
    </div>
    <div class="text-3xl font-semibold text-white mb-4">Education</div>
    <!-- list experience -->
    <div class="flex gap-12 group" v-for="(ed, i) in educations" :key="i">
      <div class="flex flex-col items-center">
        <lucideCircle
          :size="12"
          class="fill-neutral stroke-none group-hover:fill-secondary"
        />
        <div class="grow w-px bg-neutral"></div>
      </div>

      <div class="mb-10">
        <div class="group-hover:text-secondary">
          {{ ed.startYear }} - {{ ed.endYear ? ed.endYear : "Present" }}
        </div>
        <div class="flex flex-col gap-4">
          <div>
            <div class="text-2xl md:text-4xl font-semibold mt-5">
              {{ed.insituitionName}}
            </div>
            <div class="text-light">{{ed.degree}}</div>
          </div>
          <div>
            <div class="text-2xl md:text-4xl font-semibold mt-5">
              {{ed.major}}
            </div>
            <div class="text-light">{{ed.city}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  educations: Object,
});
</script>

<style></style>
