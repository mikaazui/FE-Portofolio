<template>
    <div class="p-16">
        <!-- <div class="flex justify-between my-4 border-b border-b-neutral pt-6 max-md:pt-20 pb-3">
            <NuxtLink to="/#blog" class="text-4xl font-bold">{{ fullname }}</NuxtLink>
        </div> -->
        <indexHeader :ttile="blogs" :url="'/blog'" />
        <template v-if="blogs">

            <!-- loop data -->
            <div class="flex justify-end">
                <div class="join">
                    <button class="join-item btn" :class="{ 'btn-disabled': page == 1 }" @click="page--">«</button>
                    <button class="join-item btn">{{ page }}</button>
                    <button class="join-item btn" :class="{ 'btn-disabled': page == maxPage }" @click="page++">»</button>
                </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 justify-center gap-6">
                <NuxtLink :to="'/blog/' + blog.id" v-for="blog in blogs.data" class="w-full flex flex-col group">
                    <div class="text-2xl font-bold text-success pb-4 border-b border-b-neutral grow">
                        {{ blog.title }}
                    </div>
                    <div>{{ blog.readableDate }}</div>
                    <div class="grow">
                        <!-- image data -->
                        <img v-if="blog.photos.length" :src="apiUri + blog.photos[0].path" alt=""
                            class="w-full aspect-video h-full object-cover rounded-lg" />
                        <div v-else class="w-full aspect-video bg-white"></div>
                        <div class="line-clamp-2 font-light">
                            {{ blog.content }}
                        </div>
                    </div>
                </NuxtLink>
            </div>
            <div class="flex justify-end mt-10">
                <div class="join">
                    <button class="join-item btn" :class="{ 'btn-disabled': page == 1 }" @click="page--">«</button>
                    <button class="join-item btn">{{ page }}</button>
                    <button class="join-item btn" :class="{ 'btn-disabled': page == maxPage }" @click="page++">»</button>
                </div>
            </div>
        </template>

    </div>
</template>

<script setup>
definePageMeta({
    middleware: "profile"
});
//ambil data blogs melalui server nuxt
const config = useRuntimeConfig();
const apiUri = config.public.apiUri;

const { value: useProfile } = useState('profile')
const fullname = `${useProfile.firstName} ${useProfile.lastName}`
useSeoMeta({
    title: fullname + ' | Blogs',
    description: useProfile.bio,
    ogTitle: fullname + ' | Portofolio',
    ogDescription: useProfile.bio,
    ogImage: apiUri + useProfile.avatar,
    twitterCard: 'summary_large_image'
});



const blogs = ref(null)
//register on before mount

const fetchData = (async () => {
    blogs.value = await $fetch("/api/blog?page=" + page.value);
    maxPage.value = blogs.value.maxPage;
});
onBeforeMount(async () => {
    await fetchData();
});
const maxPage = ref(1);
const page = ref(1);

watchEffect(async () => {
    await fetchData();
});

console.log(blogs);
</script>
