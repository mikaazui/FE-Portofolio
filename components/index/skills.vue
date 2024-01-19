<template>
  <div class="min-h-screen py-16">
    <div
      class="border border-neutral items-center gap-1 w-fit flex rounded-full py-1 px-4 mb-5"
    >
      <lucideUserRound :size="18" class="text-accent" />
      <div class="uppercase text-sm font-light">Skills</div>
    </div>
    <div class="mt-5">
      <div class="text-4xl font-semibold text-accent mb-5">Every great Projects begin with Wilingness to learn</div>

      <div v-for="m in 3">
        <div class="font-semibold text-accent text-xl py-3">Skill category</div>
        <div class="flex gap-6">
          <div v-for="n in 10" :key="n">
            <div class="aspect-square bg-neutral w-12 rounded-xl flex items-center justify-center">
              <LucideWrench :size="20" />
            </div>
            <div>skills {{ n }}</div>
          </div>
        </div>
      </div>

      </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
