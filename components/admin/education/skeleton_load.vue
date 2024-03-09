<template>
   <tr v-for="i in 6" :key="i">
            <th>
              <div class="skeleton rounded-lg w-22 h-6"></div>
            </th>
            <th>
              <div class="flex justify-center gap-3">
                <div class="skeleton rounded-lg w-14 h-6"></div>
                <div class="skeleton rounded-lg w-14  h-6"></div>
              </div>
            </th>
            <th>
              <div class="skeleton rounded-lg w-22 h-6 mx-auto"></div>
            </th>
            <th>
              <div class="skeleton rounded-lg w-22 h-6 mx-auto"></div>
            </th>
            <th>
              <div class="flex gap-3 justify-center">
                <div class="skeleton w-8 h-8 rounded-full"></div>
                <div class="skeleton w-8 h-8 rounded-full"></div>
              </div>
            </th>
          </tr>
</template>

<script setup>


</script>
