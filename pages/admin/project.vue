<template>
  <div>
    ini halaman project
  </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin'
})
import { useCounterStore } from '../stores/counterStore';
const CounterStore = useCounterStore();

</script>

<style>

</style>