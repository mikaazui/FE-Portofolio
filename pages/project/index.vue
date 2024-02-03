<template>
  <div class="p-16">
    <div
      class="flex justify-between my-4 border-b border-b-neutral pt-6 max-md:pt-20 pb-3"
    >
      <NuxtLink to="/#project" class="text-4xl font-bold">Projects</NuxtLink>
    </div>

    <template v-if="projects">
      <!-- loop data -->
      <div class="flex justify-end">
        <div class="join">
          <button
            class="join-item btn"
            :class="{ 'btn-disabled': page == 1 }"
            @click="page--"
          >
            «
          </button>
          <button class="join-item btn">{{ page }}</button>
          <button
            class="join-item btn"
            :class="{ 'btn-disabled': page == maxPage }"
            @click="page++"
          >
            »
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 justify-center gap-6">
        <NuxtLink
          :to="'/project/' + projects.id"
          v-for="projects in projects.data"
          class="w-full flex flex-col group"
        >
          <div
            class="text-2xl font-bold text-success pb-2 border-b border-b-neutral"
          >
            {{ projects.title }}
          </div>
          <div class="my-4 text-lg opacity-70 font-light italic">
            {{ projects.readableStartDate }} -
            {{
              projects.readableEndDate ? projects.readableEndDate : "Present"
            }}
          </div>
          <div class="grow">
            <!-- image data -->
            <img
              v-if="projects.photos.length"
              :src="apiUri + projects.photos[0].path"
              alt=""
              class="w-full aspect-video h-full object-cover rounded-lg"
            />
            <div v-else class="w-full aspect-video bg-white"></div>
            <div class="line-clamp-2 text-lg">
              {{ projects.description }}
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="flex justify-end mt-10">
        <div class="join">
          <button
            class="join-item btn"
            :class="{ 'btn-disabled': page == 1 }"
            @click="page--"
          >
            «
          </button>
          <button class="join-item btn">{{ page }}</button>
          <button
            class="join-item btn"
            :class="{ 'btn-disabled': page == maxPage }"
            @click="page++"
          >
            »
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
//ambil data blogs melalui server nuxt
const config = useRuntimeConfig();
const apiUri = config.public.apiUri;

const projects = ref(null);
//register on before mount

const fetchData = async () => {
  projects.value = await $fetch("/api/project?page=" + page.value);
  maxPage.value = projects.value.maxPage;
};
onBeforeMount(async () => {
  await fetchData();
});
const maxPage = ref(1);
const page = ref(1);

watchEffect(async () => {
  await fetchData();
});
console.log(projects);
</script>
