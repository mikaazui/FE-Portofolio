<template>
  <div class="min-h-screen py-16">
    <div class="border border-neutral items-center gap-1 w-fit flex rounded-full py-1 px-4 mb-5">
      <LucideNotebookTabs :size="18" class="text-accent" />
      <div class="uppercase text-sm font-light">Project</div>
    </div>
    <div class="mt-10">
      <div class="text-3xl font-semibold text-white mb-4">Latest Project</div>
      <!-- list Project -->
      <div class="md:grid md:grid-cols-2 flex flex-col gap-4">
        <!-- project items -->
        <template v-for="(pj, i) in projects">
          <ProjectThumbnail :project="pj" />
        </template>
      </div>
      <NuxtLink to="/project" class="btn btn-primary w-full mt-5">See All Projects</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  projects: Array,
});
</script>

<style></style>
