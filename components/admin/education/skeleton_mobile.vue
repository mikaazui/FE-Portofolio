<template>
  <div v-for="n in 6" :key="n" class="card-body bg-base-200 drop-shadow-lg">
    <div class="flex items-center gap-3 mb-3 justify-between">
      <div class="flex flex-col gap-2">
        <div class="uppercase font-semibold"></div>
        <div class="skeleton w-[230px] h-6 rounded-lg"></div>
        <div class="skeleton w-[260px] h-6 rounded-lg"></div>
      </div>
      <div class="skeleton w-8 h-8 rounded-lg"></div>
    </div>
    <div class="flex items-center justify-between gap-3">
      <div class="skeleton w-14 h-6 rounded-lg grow"></div>
      <div class="skeleton w-14 h-6 rounded-lg grow"></div>
      <div class="flex justify-between gap-2"></div>
    </div>
  </div>
</template>

<script setup></script>

