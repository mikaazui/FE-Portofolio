<template>
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Instagram</span>
    </div>
    <input v-model="formData.instagram" type="text" placeholder="Instagram"
      class="input input-bordered w-full max-w-xs" />
    <div class="text-xs text-right text-error" v-if="errors.name">{{ errors.name }}</div>
  </label>

  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Github</span>
    </div>
    <input v-model="formData.github" type="text" placeholder="Github" class="input input-bordered w-full max-w-xs" />
    <div class="text-xs text-right text-error" v-if="errors.name">{{ errors.name }}</div>
  </label>

  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Linkedin</span>
    </div>
    <input v-model="formData.linkedin" type="text" placeholder="Linkedin" class="input input-bordered w-full max-w-xs" />
    <div class="text-xs text-right text-error" v-if="errors.name">{{ errors.name }}</div>
  </label>

  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Discord</span>
    </div>
    <input v-model="formData.discord" type="text" placeholder="Discord" class="input input-bordered w-full max-w-xs" />
    <div class="text-xs text-right text-error" v-if="errors.name">{{ errors.name }}</div>
  </label>

  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Twitter</span>
    </div>
    <input v-model="formData.twitter" type="text" placeholder="Twitter" class="input input-bordered w-full max-w-xs" />
    <div class="text-xs text-right text-error" v-if="errors.name">{{ errors.name }}</div>
  </label>
</template>

<script setup>
const ProfileStore = useProfileStore()
const errors = ref({});

const formData = ref({
  instagram: ProfileStore.profile.instagram,
  github: ProfileStore.profile.github,
  linkedin: ProfileStore.profile.linkedin,
  discord: ProfileStore.profile.discord,
  twitter: ProfileStore.profile.twitter
})

</script>

<style></style>