<template>
  <div class="min-h-screen py-16" id="about">
    <div
      class="border border-neutral items-center gap-1 w-fit flex rounded-full py-1 px-4 mb-5"
    >
      <lucideUserRound :size="18" class="text-accent" />
      <div class="uppercase text-sm font-light">About</div>
    </div>
    <div class="flex flex-col mt-5 gap-5">
      <div class="text-3xl font-semibold">Latest Blog</div>
      <!-- blog list -->
      <div class="grid grid-cols-10 gap-3" v-for="n in 4" :key="n">
        <!-- image -->
        <div class="aspect-video bg-neutral col-span-3 rounded-lg"></div>
        <div class="col-span-6 lg:col-span-7">
          <div class="text-2xl mb-2 font-semibold">Blog title</div>
          <div class="font-light line-clamp-2 text-sm lg:line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa,
            officiis, vero eos, voluptates consequuntur ipsam qui dolore
            distinctio reiciendis perferendis maxime. Consequatur accusantium
            dolor, recusandae quidem rerum maxime harum placeat obcaecati ipsam
            facere temporibus architecto minus incidunt, ad ratione distinctio
            excepturi eum officia accusamus fuga delectus aliquid sapiente? Quo
            facere repellendus, ex cum sapiente eligendi odit eaque, natus,
            explicabo iure voluptate voluptatum nihil ipsum quas ea quisquam id.
            Ad, sit fuga. Obcaecati delectus neque consequuntur amet asperiores?
            Quos at sapiente dignissimos facere perspiciatis tempore, quam fuga
            unde, itaque iste, voluptatum vero illo consequuntur excepturi
            numquam explicabo? Quaerat, doloribus blanditiis.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
