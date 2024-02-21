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
<!-- 
email     String   @id @db.VarChar(100)
  firstName String   @db.VarChar(100)
  lastName  String   @db.VarChar(100)
  avatar    String?  @db.VarChar(255)
  city      String?  @db.VarChar(100)
  country   String?  @db.VarChar(100)
  job       String?  @db.VarChar(100)
  phone     String?  @db.VarChar(25)
  dob       DateTime @db.Date
  address   String?  @db.Text
  bio       String?  @db.Text
  website   String?  @db.VarChar(100)
  instagram String?  @db.VarChar(100)
  github    String?  @db.VarChar(100)
  linkedin  String?  @db.VarChar(100)
  discord   String?  @db.VarChar(100)
  twitter   String?  @db.VarChar(100) -->

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