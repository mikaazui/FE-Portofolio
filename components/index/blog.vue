<template>
  <div class="min-h-screen py-16" id="about">
    <div
      class="border border-neutral items-center gap-1 w-fit flex rounded-full py-1 px-4 mb-5"
    >
      <LucideMessageSquareText :size="18" class="text-accent" />
      <div class="uppercase text-sm font-light">Blog</div>
    </div>
    <div class="flex flex-col mt-5 gap-5">
      <div class="text-3xl font-semibold">Latest Blog</div>
      <!-- blog list -->
      <div v-for="n in 4" class="grid grid-cols-10 gap-3 group hover:bg-base-200 p-3">
        <div
          class="aspect-video rounded-lg col-span-10 md:col-span- bg-neutral w-full"
        ></div>
        <div class="md:col-span-7 col-span-10">
          <div class="text-lg font-semibold group-hover:text-success">Title Blog</div>
          <div class="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            eius. A eligendi aliquid laborum placeat eius possimus quia ea
            minima incidunt maiores! Nostrum quasi inventore ut officia beatae
            facere amet in iusto natus illum, architecto atque neque unde
            repellat minus aperiam? Aliquid at optio ratione, consequuntur
            blanditiis repellendus commodi, rerum illo provident unde ducimus
            iste ullam, laborum reiciendis quis magnam? Dolorem pariatur
            architecto voluptatum optio odit accusamus quisquam nam excepturi
            officia. Repellat unde laborum minus! Ullam quod autem quaerat
            pariatur placeat vero harum debitis sed accusamus, nulla ipsa vel
            quam dolores velit natus nemo, tempora necessitatibus, ea cum.
            Nostrum, quis.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
