<template>
    <div class="bg-neutral-100 w-full min-h-screen flex flex-col items-center justify-center p-16" data-theme='retro'>
        <div>
            <div class="flex flex-col items-center">
                <div class="text-8xl text-error font-semibold mb-5">
                    {{ error.statusCode }}
                </div>
                <div class="text-2xl font-semibold mb-5" v-if="error.statusCode === 404">
                    Oops.. the page you're looking for aren't exist.
                </div>
                <div v-else-if="error.statusCode === 500">
                    Internal Server Error
                </div>
                <div class="text-3xl font-semibold mb-5">
                    {{ error.message }}
                </div>
                <a href="/#" class="btn btn-outline btn-primary-content">back to home</a>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    error: Object
});

</script>
