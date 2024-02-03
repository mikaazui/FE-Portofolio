<template>
  <div class="px-16">
    <!-- header -->
    <div
      class="flex justify-between my-4 border-b border-b-neutral pt-6 max-md:pt-20 pb-3"
    >
      <div class="text-4xl font-bold">FULLNAME</div>
      <NuxtLink to="/project">Project</NuxtLink>

    </div>

    <!-- content -->
    <!-- <div class="my-4">{{ blog.content }}</div> -->
    <!-- photos -->
    <div>
      <Carousel :items-to-show="2" :wrapAround="true" :autoplay="3000">
        <Slide v-for="photo in project.photos" :key="photo.id">
          <!-- <div class="aspect-video w-full bg-gray-400 text-black test-4xl flex">
            {{ slide }}
            
          </div>  -->
          <div class="w-full h-full">
            <div class="justify-center bg-contain">
              <img
                v-for="photo in project.photos"
                :src="apiUri + photo.path"
                class="w-[600px] h-full rounded-xl px-2"
                alt=""
              />
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
    <div class="my-4 text-3xl font-bold text-success pb-4 border-b border-b-neutral">{{ project.title }}</div>
    <div class="my-4 text-lg font-light"> {{ project.readableStartDate }} - {{ project.readableEndDate ? project.readableEndDate : "Present" }}</div>
    <div class="my-4 justify-center">{{ project.description }}</div>

  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const route = useRoute();
const projectID = route.params.id;
const config = useRuntimeConfig();
const apiUri = config.public.apiUri;


const project = await $fetch(`/api/project/${projectID}`);
console.log(project);
</script>
