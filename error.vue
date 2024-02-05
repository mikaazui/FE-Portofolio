<template>
    <div>

        <div class="flex flex-col items-center p-16">
            <div class="font-bold text-4xl">Oops...</div>
            <div class="flex gap-3">
                <div class="font-bold text-3xl">{{ error.statusCode }}</div>
                <div class="font-bold text-3xl">{{ error.statusMessage }}</div>
            </div>
            <ImagesBottle class="opacity-90" />
            <NuxtLink to="/" class="text-xl font-semibold btn btn-primary">Back To Home</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    error: Object
});

</script>
