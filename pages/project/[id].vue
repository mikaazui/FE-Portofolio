<template>
    <div>
        <IndexHeader />
    </div>
    <div class="grid grid-cols-10 min-h-screen w-full gap-3 p-6 md:p-14">
        <!-- carousel/kiri/photos -->
        <div class="col-span-full md:col-span-6">
            <div class="col-span-full md:col-span-4 flex order-first md:hidden">
                <!-- Mobile Version -->
                <!-- project details -->
                <div class="bg-base-200 rounded-2xl mb-2 mt-4 grow p-3 md:p-6">
                    <div class="flex flex-col gap-3">
                        <div class="text-2xl font-bold text-success">{{ project.title }}</div>
                        <div class="text-md">{{ project.readableStartDate }} - {{ project.readableEndDate }}</div>
                        <div class=" capitalize badge badge-success">{{ status }}</div>
                    </div>
                    <!-- skills -->
                    <div class="flex gap-2 my-3">
                        <div v-for="skills in project.skills"
                            class="rounded-xl badge badge-outline badge-success text-nowrap px-2">
                            {{ skills.title }}
                        </div>
                    </div>
                </div>
            </div>

            <template>
                <carousel :items-to-show="1">
                    <slide v-for="photo in 2" :key="photo">
                        <img v-for="photo in project.photos" :src="apiUri + photo.path" class="" alt="">
                        <!-- <div class="aspect-video bg-white w-full h-full"></div> -->
                    </slide>

                    <template #addons>
                        <navigation />
                        <pagination />
                    </template>
                </carousel>
            </template>

            <div>
                <div>
                    <!-- {{ project.description }} -->
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a repudiandae, impedit deserunt numquam,
                    harum non quibusdam provident odio quasi quaerat quo laudantium, saepe adipisci libero eos ut! Eum,
                    voluptas accusantium! Rerum porro eaque, voluptates cum consequatur sint doloremque expedita soluta ab
                    voluptatum, labore nobis nostrum totam laborum itaque sunt, nesciunt ex aperiam accusantium laudantium
                    maxime aspernatur magni quia. Voluptas vel, adipisci eaque facere quibusdam doloremque quos libero
                    temporibus magni! Omnis rerum recusandae, unde reiciendis nihil debitis maxime veniam dignissimos
                    tenetur! Molestias nemo modi libero corporis sint placeat vero dolore ea, eaque hic, sed similique
                    dolorem harum eos nam perspiciatis.
                </div>
            </div>
        </div>
        <!-- TODO NTAR ISI DENGAN SESUATU/POKOKNYA REVISI LAGI -->
        <!-- kanan/detail project -->
        <div class="col-span-full md:col-span-4 flex max-md:hidden">
            <!-- project details -->
            <div class="bg-base-200 rounded-2xl grow p-6">
                <div class="flex flex-col gap-3">
                    <div class="text-4xl font-bold text-success">{{ project.title }}</div>
                    <div class="text-xl">{{ project.readableStartDate }} - {{ project.readableEndDate }}</div>
                    <div class=" capitalize badge badge-success">{{ status }}</div>
                </div>
                <!-- skills -->
                <div class="flex gap-2 my-3">
                    <div v-for="skills in project.skills"
                        class="rounded-xl badge badge-outline badge-success text-nowrap px-2">
                        {{ skills.title }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: "profile"
});
const route = useRoute();
const projectID = route.params.id;
const project = await $fetch(`/api/project/${projectID}`);
const config = useRuntimeConfig();
const apiUri = config.public.apiUri;

const { value: useProfile } = useState('profile')
const fullname = `${useProfile.firstName} ${useProfile.lastName}`
useSeoMeta({
    title: `${fullname} | Project | ${project.id}`,
    description: useProfile.bio,
    ogTitle: fullname + ' | Portofolio',
    ogDescription: useProfile.bio,
    ogImage: apiUri + useProfile.avatar,
    twitterCard: 'summary_large_image'
});

const status = computed(() => {
    return project.status.replaceAll("_", " ").toLowerCase();
})

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";


console.log(project);
//modify status string
</script>
