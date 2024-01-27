<template>
  <div class="min-h-screen py-16">
    <div
      class="border border-neutral items-center gap-1 w-fit flex rounded-full py-1 px-4 mb-5"
    >
      <lucideBlocks :size="18" class="text-accent" />
      <div class="uppercase text-sm font-light">Skills</div>
    </div>
    <div class="mt-5">
      <div class="text-2xl md:text-4xl font-semibold text-accent mb-5">
        Every great Projects begin with Wilingness to learn
      </div>

      <div v-for="(category, i) in skills" :key="i">
        <div class="font-semibold text-accent text-lg md:text-xl py-3">
          {{ category.title }}
        </div>
        <div class="flex overflow-scroll no-scrollbar md:flex-wrap gap-6">
          <!-- list skills -->
          <div v-for="(skill, k) in category.Skill" :key="k" class="">
            <div
              class="aspect-square bg-white opacity-75 w-24 p-1 md:w-12 rounded-xl flex items-center justify-center"
              v-html="skill.svg"
            ></div>
            <div>{{ skill.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  skills: Array,
});
</script>

<style></style>
