<template>
  <div class="min-h-screen py-16" id="about">
    <div
      class="border border-neutral items-center gap-1 w-fit flex rounded-full py-1 px-4 mb-5"
    >
      <LucideMessageSquareText :size="18" class="text-accent" />
      <div class="uppercase text-sm font-light">Blog</div>
    </div>
    <div class="flex flex-col mt-5 gap-5">
      <div class="text-3xl font-semibold">Latest Blog</div>
      <!-- blog list -->
      <div
        v-for="(blog, i) in blogs"
        :key="i"
        class="grid grid-cols-10 gap-3 group hover:bg-base-200 p-3"
      >
        <!-- images -->
        <!-- TODO bikin images -->
        <div
          class="rounded-lg col-span-10 md:col-span-3 overflow-hidden group-hover:scale-105 duration-200"
        >
          <div
            v-if="!blog.photos.length"
            class="aspect-video rounded-lg col-span-10 md:col-span-3 bg-neutral group-hover:scale-105 duration-200"
          ></div>
          <!-- photo pertama -->
          <div v-else>
            <img
              :src="apiUri + blog.photos[0].path"
              alt="blog.title"
              class="bg-cover h-full"
            />
          </div>
        </div>

        <!-- title -->
        <div class="md:col-span-7 col-span-10 flex flex-col">
          <div class="flex-none text-lg font-semibold group-hover:text-success">
            {{ blog.title }}
          </div>
          <div class="grow line-clamp-2">
            {{ blog.content }}
          </div>
          <!-- TODO bikin readable data(date) -->
          <div class="font-thin opacity-60 text-slate-400">
            {{ blog.readableDate }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blogs: Array,
});

const config = useRuntimeConfig();
const apiUri = config.public.apiUri;
</script>

<style></style>
