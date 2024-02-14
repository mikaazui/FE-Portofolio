<template>
    <NuxtLink :to="'/project/' + project.id" class="grid grid-cols-1 gap-3 group p-3">
        <div class="col-span-1 md:col-span-1 group" :key="i"></div>
        <div class="flex flex-col hover:bg-base-200 group-hover:scale-105 duration-200 p-5 rounded-2xl">
            <div class="flex-none items-end justify-between grow">
                <div class="text-xl font-semibold text-accent truncate">
                    {{ project.title }}
                </div>
                <!-- TODO BENERIN NTAR -->
                <div class="font-light opacity-60">
                    {{ project.readableStartDate }}
                </div>
            </div>
            <!-- TODO create photo -->
            <div v-if="project.photos.length"
                class="overflow-hidden aspect-video rounded-xl mt-2">
                <img :src="apiUri + project.photos[0].path" alt="project.title" class="object-cover" />
            </div>
            <div v-else class="aspect-video bg-neutral rounded-xl mt-2"></div>
            <div class="flex gap-2 max-md:no-scrollbar overflow-x-auto mt-2">
                <!-- TODO make skill relationship -->
                <template v-if="project.skills">
                    <div v-for="skills in project.skills" class="rounded-xl border border-neutral text-nowrap px-2">
                        {{ skills.title }}
                    </div>
                </template>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
defineProps({
    project: Object,
});
const config = useRuntimeConfig();
const apiUri = config.public.apiUri;
</script>
