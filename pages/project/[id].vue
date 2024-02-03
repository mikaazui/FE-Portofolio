<template>
  <div class="px-16">
    <!-- header -->
    <div class="flex justify-between my-4 border-b border-b-neutral pt-6 max-md:pt-20 pb-3">
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
              <img v-for="photo in project.photos" :src="apiUri + photo.path" class="w-[600px] h-full rounded-xl px-2"
                alt="" />
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
    <div class="flex items-center">
      <div class="text-3xl font-bold text-success border-b border-b-neutral">{{ project.title }}</div>
      <div class="badge-primary rounded-3xl font-bold p-1.5 mx-3">{{ status }}</div>

    </div>

    <div class="flex items-center my-3 gap-3">
      <div class="text-lg font-semibold"> {{ project.readableStartDate }} - {{ project.readableEndDate ?
        project.readableEndDate : "Present " }}</div>
      <div class="font-bold badge-success p-1.5 rounded-3xl">{{ project.company ? project.company : 'No Company' }}</div>
    </div>
    <div class="my-4 justify-center">{{ project.description }}</div>
    <div class="my-4 justify-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur
      voluptatibus aspernatur ipsam, aperiam error veniam cumque aut in corrupti placeat ea libero quia. Magnam culpa
      dolorum totam dicta, veritatis dolor numquam! Repudiandae dicta, id sapiente rerum autem neque! Repudiandae tempora
      incidunt nulla soluta neque perspiciatis unde rem ea molestias dolores ipsa in consequuntur veniam, suscipit
      laboriosam. Itaque dolores voluptates ratione illo fuga, quisquam praesentium qui, et obcaecati corporis iste ab?
      Veritatis cum nihil totam doloribus delectus mollitia labore corrupti nulla voluptatibus nam voluptatem possimus,
      obcaecati cupiditate praesentium. Aspernatur atque aut odit nihil autem, suscipit corporis voluptatum perferendis
      amet ipsa?</div>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const route = useRoute();
const projectID = route.params.id;
const config = useRuntimeConfig();
const apiUri = config.public.apiUri;
//modify status string
const status = computed(() => {
  return project.status.replaceAll("_", " ")
})


const project = await $fetch(`/api/project/${projectID}`);
console.log(project);
</script>
