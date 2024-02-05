<template>
    <div class="p-16">
        <div class="flex justify-between my-4 border-b border-b-neutral pt-6 max-md:pt-20 pb-3">
            <NuxtLink to="/#project" class="text-4xl font-bold">Projects</NuxtLink>
        </div>

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
//ambil data blogs melalui server nuxt
const config = useRuntimeConfig();
const apiUri = config.public.apiUri;

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

// fetch profile
const profile = await $fetch("/api/profile");
const fullname = computed (() => {
    return `${profile.firstName} ${profile.lastName}`
})
console.log(projects);
</script>
