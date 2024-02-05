<template>
    <div class="px-16">
        <indexHeader :ttile="blogs" :url="'/project'" />
        <!-- content project -->
        <div class="grid grid-cols-10 gap-6 items-center">
            <!-- sebelah kanan -->

            <div class="col-span-full md:col-span-6">
                <!-- photos -->
                <div>
                    <Carousel :items-to-show="2" :wrapAround="true" :autoplay="3000">
                        <Slide v-for="photo in project.photos" :key="photo.id">
                            <div class="w-full h-full">
                                <div class="justify-center bg-contain">
                                    <img v-for="photo in project.photos" :src="apiUri + photo.path"
                                        class="w-[600px] h-full rounded-xl px-2" alt="" />
                                </div>
                            </div>
                        </Slide>

                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                </div>

            </div>
            <!-- sebelah kiri -->
            <div class="col-span-full md:col-span-4 bg-base-300 p-6 rounded-xl">
                <!-- data detail -->
                <!-- content -->
                <div class="flex items-center">
                    <div class="text-3xl font-bold text-success border-b border-b-neutral">{{ project.title }}</div>
                    <div class="font-bold p-2 bg-base-200 rounded-xl flex justify-center">{{ status }}</div>
                </div>

                <div class="mt-4">
                    <div class="text-lg font-semibold">Date: {{ project.readableStartDate }} - {{ project.readableEndDate ?
                        project.readableEndDate : "Present " }}</div>
                    <div class="font-bold">Company: {{ project.company ? project.company : 'No Company' }}
                    </div>
                </div>
                <template v-if ="project.skills">
                    <!-- skills -->
                    <div class="flex gap-2 auto mt-3">
                        <div v-for="skills in project.skills" class="rounded-xl badge badge-outline badge-success text-nowrap px-2">
                            {{ skills.title }}
                        </div>
                    </div>
                </template>
            </div>
        </div>

        <div class="">
            <div class="my-4 justify-center">{{ project.description }}</div>
            <div class="my-4 justify-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur
                voluptatibus aspernatur ipsam, aperiam error veniam cumque aut in corrupti placeat ea libero quia. Magnam culpa
                dolorum totam dicta, veritatis dolor numquam! Repudiandae dicta, id sapiente rerum autem neque! Repudiandae
                tempora
                incidunt nulla soluta neque perspiciatis unde rem ea molestias dolores ipsa in consequuntur veniam, suscipit
                laboriosam. Itaque dolores voluptates ratione illo fuga, quisquam praesentium qui, et obcaecati corporis iste
                ab?
                Veritatis cum nihil totam doloribus delectus mollitia labore corrupti nulla voluptatibus nam voluptatem
                possimus,
                obcaecati cupiditate praesentium. Aspernatur atque aut odit nihil autem, suscipit corporis voluptatum
                perferendis
                amet ipsa?</div>
        </div>
        </div>
        <!-- header -->

</template>

<script setup>
definePageMeta({
  middleware: "profile"
});

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const route = useRoute();
const projectID = route.params.id;
const config = useRuntimeConfig();
const apiUri = config.public.apiUri;
const project = await $fetch(`/api/project/${projectID}`);
console.log(project);
//modify status string
const status = computed(() => {
    return project.status.replaceAll("_", " ")
})

</script>
