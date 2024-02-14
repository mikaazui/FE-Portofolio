<template>
    <div>
        ini halaman index
    </div>
    <div>
        {{ CounterStore.count }}
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin'
})
import { useCounterStore } from '../stores/counterStore';
const CounterStore = useCounterStore(); 
</script>