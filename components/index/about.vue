<template>
    <div class="min-h-screen py-16 flex flex-col">
        <div class="border border-neutral items-center gap-1 w-fit flex rounded-full py-1 px-4 mb-5">
            <lucideUserRound :size="18" class="text-accent" />
            <div class="uppercase text-sm font-light">About</div>
        </div>
        <div class="flex flex-col grow">
            <div class="text-5xl font-semibold mb-5">
                Say Hi from <span class="text-accent">{{ profile.firstName }}</span>, Webflow Designer and Developer
            </div>
            <div class="text-3xl font-semibold mb-4">
                Every great design begin with an even better story
            </div>
            <div class="font-light opacity-60">
                <!-- TODO pr -->
                Since beginning my journey as a freelance designer nearly 8 years ago,
                I've done remote work for agencies, consulted for startups, and
                collaborated with talented people to create digital products for both
                business and consumer use. I'm quietly confident, naturally curious, and
                perpetually working on improving my chopsone design problem at a time.
            </div>
        </div>
        <div class="flex gap-20 grow items-end pb-20">
            <!-- years of experiences -->
            <div>
                <div v-if="profile.year_of_experience > 1">
                    <span class="text-accent text-4xl font-semibold">{{ profile.year_of_experience }} +</span>
                    <div class="text-xl">
                        YEARS OF <br />
                        EXPERIENCE
                    </div>
                </div>
                <div v-else>
                    <span class="text-accent text-4xl font-semibold">{{ profile.month_of_experience }} +</span>
                    <div class="text-xl">
                        MONTHS OF <br />
                        EXPERIENCE
                    </div>
                </div>
            </div>

            <!-- projects -->
            <div>
                <span class="text-accent text-4xl font-semibold">{{ profile.count_project }}+</span>
                <div class="text-xl">
                    PROJECTS <br />
                    COMPLETED
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    profile: Object,
});
</script>
