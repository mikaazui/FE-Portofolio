<template>
    <div class="md:fixed min-h-screen md:flex items-center md:w-[25%] lg:w-[26%] xl:w-[24%] p-2 rounded-xl py-24">
        <div class="p-8 w-full rounded-3xl flex-col gap-6 border border-accent">
            <div class="justify-between flex items-center">
                <div class="text-3xl font-bold">
                    {{ profile.firstName }}
                </div>
                <div class="text-right font-semibold">{{ profile.job }}</div>
            </div>

            <div v-if="profile.avatar"
                class="aspect-square m-4 overflow-hidden rounded-2xl flex justify-center items-center">
                <img :src="apiUri + profile.avatar" alt="avatar.jpg" class="object-cover mih-h-full min-w-wfull"
                    width="100%" />
            </div>
            <div v-else class="apect-square bg-neutal rounded-2xl w-full"></div>
            <!-- EMAIL & CONTACT -->
            <div class="text-center font-bold">
                <div>{{ profile.email }}</div>
                <div>{{ profile.city }}, {{ profile.country }}</div>
            </div>
            <div class="text-center mt-5 opacity-50">
                &copy;{{ year }} {{ profile.firstName }}, All Rights Reserved
            </div>

            <!-- social buttons -->
            <div class="flex p-4 justify-center gap-3">
                <div v-if="profile.instagram" href="https://www.instagram.com/mikaazui/" target="__blank"
                    class="btn-outline btn-circle btn border-neutral hover:bg-transparent hover:border-green">
                    <lucideInstagram :size="20" class="text-secondary" />
                </div>
                <div v-if="profile.twitter" href="https://twitter.com/myrfellon" target="__blank"
                    class="btn-outline btn-circle btn border-neutral hover:bg-transparent hover:border-green">
                    <LucideTwitter :size="20" class="text-secondary" />
                </div>
                <div v-if="profile.github" href="https://github.com/mikaazui" target="__blank"
                    class="btn-outline btn-circle btn border-neutral hover:bg-transparent hover:border-green">
                    <LucideGithub :size="20" class="text-secondary" />
                </div>
                <div href="https://github.com/mikaazui" target="__blank"
                    class="btn-outline btn-circle btn border-neutral hover:bg-transparent hover:border-green">
                    <LucideGlobe :size="20" class="text-secondary" />
                </div>
                <!-- <div
          class="btn-outline btn-circle btn border-neutral hover:bg-transparent hover:border-green"
        >
          <IconsDiscord
            :size="7"
            class="text-secondary w-9 stroke-secondary"
            href="https://discord.gg/RmagA6vQxu"
            target="__blank"
          />
        </div> -->
            </div>
            <!-- HIRE ME -->
            <button class="btn btn-primary w-full">
                <lucideMail :size="20" />
                <div>HIRE ME</div>
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    profile: Object,
});
//computing full name
const fullName = computed(() => {
    return `${props.profile.firstName} ${props.profile.lastName}`
});

const config = useRuntimeConfig();
const apiUri = config.public.apiUri;
const year = new Date().getFullYear();
</script>

<style></style>
