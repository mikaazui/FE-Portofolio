<template>
  <div>
    <div class="flex items-center justify-between pb-3 text-xl font-semibold">
      <div class="flex items-center gap-3">
        <lucideFile :size="20" class="" />Blog
      </div>
      <button class="btn btn-md btn-primary max-lg:w-12 flex items-center justify-center">
        <lucidePlus :size="20" />
        <div class="max-lg:hidden">Add Blog</div>
      </button>
    </div>

    <div class="flex justify-between my-3">
      <input @keyup.enter="page = 1;getData()" v-model="filter" type="text" placeholder="Type here" class="input inpur-sm input-bordered w-full max-w-xs" />
      <div class="join">
        <button class="join-item btn" @click="prevPage">«</button>
        <button class="join-item btn">{{ page }}</button>
        <button class="join-item btn" @click="nextPage">»</button>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-2 sm:grid-cols-4">
      <div v-for="blog in BlogStore.blogs" :key="blog.id" class="card bg-base-100 shadow-xl">
        <figure>
          <img class="w-full aspect-video object-cover" v-if="blog.photos.length" :src="apiUri + blog.photos[0].path" />

          <div v-else class="bg-neutral/20 aspect-video w-full"></div>
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ blog.title }}</h2>
          <p class="line-clamp-2">{{ blog.content }}</p>
        </div>
      </div>
    </div>

    <!-- TODO TAMBAHIN SVG NOT FOUND -->
    <div v-if="BlogStore.blogs.length == 0">
      <!-- TODO ADD IMAGE NOT FOUND -->
      <div class="text-center text-xl opacity-35 font-semibold">No Data</div>

    </div>
    

    <div class="flex justify-end">
      <div class="join">
        <button class="join-item btn" @click="page != 1 ? page-- : page">«</button>
        <button class="join-item btn">{{ page }}</button>
        <button class="join-item btn" @click="page != BlogStore.maxPage ? page++ : page">»</button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
})

const config = useRuntimeConfig();
const apiUri = config.public.apiUri;
const BlogStore = useBlogStore();
const page = ref(1)

onBeforeMount(async () => {
  await getData();

  // console.log(BlogStore.data)
  // console.log(BlogStore.blogs)
  // console.log(BlogStore.total)
  // console.log(BlogStore.maxPage)
});

const prevPage = async () => {
  if (page.value != 1) {
    page.value = page.value - 1;
    await getData()

  }
}

const nextPage = async () => {
  if (page.value != BlogStore.maxPage) {

    page.value = page.value - 1;
    await getData()
  }
};
//fetch data blog
const getData = (async () => {
  await BlogStore.get(page.value, filter.value)
});

const filter = ref('');




</script>
