<template>
  <div>
    <div class="my-4">{{ blog.title }}</div>
    <!-- content -->
    <div class="my-4">{{ blog.content }}</div>
    <!-- photos -->
    <div>
      <Carousel :items-to-show="1.5" :wrapAround="true" :autoplay="3000">
        <Slide v-for="photo in blog.photos" :key="photo.id">
           <!-- <div class="aspect-video w-full bg-gray-400 text-black test-4xl flex">
            {{ slide }}
            
          </div>  -->
          <img v-for="photo in blog.photos" :src="apiUri + photo.path" class="w-full h-full" alt="">
          
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const route = useRoute();
const blogID = route.params.id;
const config = useRuntimeConfig();
const apiUri = config.public.apiUri;

const blog = await $fetch(`/api/blog/${blogID}`);
console.log(blog);
</script>
