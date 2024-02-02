<template>
  <div class="p-16">
    <div
      class="flex justify-between my-4 border-b border-b-neutral pt-6 max-md:pt-20 pb-3"
    >
      <div class="text-4xl font-bold">FULLNAME</div>
      <NuxtLink to="/blog">BLOG</NuxtLink>
    </div>

    <!-- loop data -->

    <div class="grid grid-cols-3 justify-center gap-6">
      <div class="join">
        <button class="join-item btn">«</button>
        <button class="join-item btn">{{ page }}</button>
        <button class="join-item btn">»</button>
      </div>
      <NuxtLink
        :to="'/blog/' + blog.id"
        v-for="blog in blogs.data"
        class="w-full flex flex-col group"
      >
        <div
          class="text-2xl font-bold text-success pb-4 border-b border-b-neutral grow"
        >
          {{ blog.title }}
        </div>
        <div>{{ blog.readableDate }}</div>
        <div>
          <!-- image data -->
          <img
            v-if="blog.photos.length"
            :src="apiUri + blog.photos[0].path"
            alt=""
            class="w-full aspect-video h-full"
          />
          <div v-else class="w-full aspect-video bg-white"></div>
          <div class="line-clamp-2 font-light">
            {{ blog.content }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
//ambil data blogs melalui server nuxt
const blogs = await $fetch("/api/blog");
const config = useRuntimeConfig();
const apiUri = config.public.apiUri;
const page = blogs.page;

console.log(blogs);
</script>
