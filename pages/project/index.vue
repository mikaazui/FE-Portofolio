<template>
    <div class="p-16">
        <indexHeader :ttile="projects" :url="'/project'" />

        <template v-if="projects">
            <!-- loop data -->
            <div class="grid grid-cols-3 justify-end">
                <template v-for="project in projects.data">
                    <projectThumbnail :project="project" />
                </template>
            </div>
            <div class="flex justify-end mt-10">
                <div class="join">
                    <button class="join-item btn" :class="{ 'btn-disabled': page == 1 }" @click="page--">
                        «
                    </button>
                    <button class="join-item btn">{{ page }}</button>
                    <button class="join-item btn" :class="{ 'btn-disabled': page == maxPage }" @click="page++">
                        »
                    </button>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
definePageMeta({
  middleware: "profile"
});
const config = useRuntimeConfig();
const apiUri = config.public.apiUri;

const { value: useProfile } = useState('profile')
const fullname = `${useProfile.firstName} ${useProfile.lastName}`
useSeoMeta({
    title: fullname + ' | Projects',
    description: useProfile.bio,
    ogTitle: fullname + ' | Portofolio',
    ogDescription: useProfile.bio,
    ogImage: apiUri + useProfile.avatar,
    twitterCard: 'summary_large_image'
});

const projects = ref(null);
//register on before mount

const fetchData = async () => {
    projects.value = await $fetch("/api/project?page=" + page.value);
    maxPage.value = projects.value.maxPage;
};
onBeforeMount(async () => {
    await fetchData();
});
const maxPage = ref(1);
const page = ref(1);

watchEffect(async () => {
    await fetchData();
});

</script>
