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
        <div
          class="col-span-1 md:col-span-1 group"
          v-for="(pj, i) in projects"
          :key="i"
        >
          <div class="flex flex-col">
            <div class="flex-none items-end justify-between grow">
              <div class="text-xl font-semibold text-accent truncate">
                {{ pj.title }}
              </div>
              <!-- TODO BENERIN NTAR -->
              <div class="font-light opacity-60">
                {{ pj.readableStartDate }}
              </div>
            </div>
            <!-- TODO create photo -->
            <div v-if="pj.photos.length" class="overflow-hidden group-hover:scale-105 duration-200 aspect-video rounded-xl mt-2 ">
              <img
                :src="apiUri + pj.photos[0].path"
                alt="pj.title"
                class="object-cover"
              />
            </div>
            <div
              v-else
              class="aspect-video bg-neutral rounded-xl mt-2 group-hover:scale-105 duration-200"
            ></div>
            <div class="flex gap-2 max-md:no-scrollbar overflow-x-auto mt-2">
              <!-- TODO make skill relationship -->
              <div
                v-for="skills in pj.skills"
                class="rounded-xl border border-neutral text-nowrap px-2"
              >
                Skill {{ skills.Skill.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  projects: Array,
});
const config = useRuntimeConfig();
const apiUri = config.public.apiUri;

console.log(props.projects);
</script>

<style></style>
