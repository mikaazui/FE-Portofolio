<template>
    <div>
        ini halaman index
    </div>
    <div>
        {{ CounterStore.count }}
    </div>
    <button class="btn btn-primary" @click="CounterStore.increment">add counter</button>
    <button class="btn btn-primary" @click="CounterStore.decrement">add counter</button>
</template>

<script setup>
definePageMeta({
    layout: 'admin'
})
import { useCounterStore } from '../../stores/counterStore';
const CounterStore = useCounterStore(); 
</script>