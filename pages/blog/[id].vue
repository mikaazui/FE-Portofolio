<template>
    <div class="px-16">
        <!-- header -->
        <indexHeader :ttile="blogs" :url="'/blog'" />

        <!-- content -->
        <!-- <div class="my-4">{{ blog.content }}</div> -->
        <!-- photos -->
        <div>
            <Carousel :items-to-show="2" :wrapAround="true" :autoplay="3000">
                <Slide v-for="photo in blog.photos" :key="photo.id">
                    <!-- <div class="aspect-video w-full bg-gray-400 text-black test-4xl flex">
            {{ slide }}
            
          </div>  -->
                    <div class="w-full h-full">
                        <div class="justify-center bg-contain">
                            <img v-for="photo in blog.photos" :src="apiUri + photo.path" class="w-[600px] h-full rounded-xl"
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
        <div class="my-4 text-3xl font-bold text-success pb-4 border-b border-b-neutral">{{ blog.title }}</div>
        <div class="my-4 text-lg font-light">{{ blog.readableDate }}</div>
        <div class="my-4 justify-center">{{ blog.content }}</div>

    </div>
</template>

<script setup>
definePageMeta({
    middleware: "profile"
});
const route = useRoute();
const blogID = route.params.id;
const blog = await $fetch(`/api/blog/${blogID}`);

const config = useRuntimeConfig();
const apiUri = config.public.apiUri;

const { value: useProfile } = useState('profile')
const fullname = `${useProfile.firstName} ${useProfile.lastName}`
useSeoMeta({
    title: `${fullname} | Blog | ${ blog.id }`,
    description: useProfile.bio,
    ogTitle: fullname + ' | Portofolio',
    ogDescription: useProfile.bio,
    ogImage: apiUri + useProfile.avatar,
    twitterCard: 'summary_large_image'
});

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";



console.log(blog);
</script>
