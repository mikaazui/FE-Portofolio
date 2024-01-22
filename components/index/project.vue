<template>
  <div class="min-h-screen py-16">
    <div
      class="border border-neutral items-center gap-1 w-fit flex rounded-full py-1 px-4 mb-5"
    >
      <LucideNotebookTabs :size="18" class="text-accent" />
      <div class="uppercase text-sm font-light">Project</div>
    </div>
    <div class="mt-10">
      <div class="text-3xl font-semibold text-white mb-4">Latest Project</div>
      <!-- list Project -->
      <div class="md:grid md:grid-cols-2 flex flex-col gap-4">
        <!-- project items -->
        <div class="col-span-1 md:col-span-1 group" v-for="n in 4" :key="n">
          <div class="flex items-end justify-between">
            <div class="text-xl font-semibold text-accent">Project Title</div>
            <div class="font-semibold">02, 08, 2023</div>
          </div>

          <div class="aspect-video bg-neutral rounded-xl mt-2 group-hover:scale-105 duration-200"></div>
          <div class="flex gap-2 no-scrollbar overflow-scroll mt-2">
            <div v-for="n in 10" :key="n" class="rounded-xl border border-neutral text-nowrap px-2">Skill {{ n }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
