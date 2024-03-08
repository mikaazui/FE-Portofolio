<template>
  <div>
    ini halaman project
  </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
    middleware: ['auth'],
    ssr: true
})
import { useCounterStore } from '../stores/counterStore';
const CounterStore = useCounterStore();

</script>

<style>

</style>