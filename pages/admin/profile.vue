<template>
  <div class="flex flex-col">
    <div role="tablist" class="tabs tabs-lifted">
      <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Profile" checked />
      <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <adminProfile  v-if="ProfileStore.profile"/>
      </div>

      <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Social Media" />
      <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <AdminProfileSocial v-if="ProfileStore.profile"/>
      </div>
    </div>

  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
  ssr:true
});


const ProfileStore = useProfileStore()

onBeforeMount(async () => {
  if (ProfileStore.profile == null) await ProfileStore.get()

})
</script>