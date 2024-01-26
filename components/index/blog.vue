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
        class="grid grid-cols-10 gap-3 group hover:bg-base-200 p-3"
      >
      <!-- images -->
      <!-- TODO bikin images -->
        <div
          class="aspect-video rounded-lg col-span-10 md:col-span-3 bg-neutral w-full"
        ></div>
        <!-- title -->
        <div class="md:col-span-7 col-span-10 flex flex-col">
          <div class=" flex-none text-lg font-semibold group-hover:text-success">
            {{ blog.title }}
          </div>
          <div class="grow line-clamp-2">
            {{ blog.content }}
          </div>
          <!-- TODO bikin readable data(date) -->
          <div class="font-thin opacity-60 text-slate-400">
            {{ blog.createdAt }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blogs: Array,
});
</script>

<style></style>
