<template>
  <!-- MAIN CONTENT -->
  <div class="min-h-screen grow grid grid-cols-10">
    <!-- PROFILE CARD -->
    <div class="col-span-10 md:col-span-5 lg:col-span-4 xl:col-span-3 w-full">
      <IndexProfileCard :profile="profile" />
    </div>
    <!-- SECTIONS -->
    <div
      class="col-span-10 md:col-span-5 lg:col-span-6 xl:col-span-7 p-6 lg:px-20 xl:px-40 pt-12"
    >
      <div class="min-h-screen" id="about">
        <indexAbout :profile="profile" />
      </div>
      <div class="min-h-screen" id="experience">
        <indexExperience :experiences="experiences" />
      </div>
      <div class="min-h-screen" id="education">
        <indexEducation :educations="educations" />
      </div>
      <div class="min-h-screen" id="skills">
        <indexSkills :skills="skills" />
      </div>
      <div class="min-h-screen" id="project">
        <IndexProject :projects="projects" />
      </div>
      <div class="min-h-screen" id="blog">
        <IndexBlog :blogs="blogs" />
      </div>
      <!-- <div class="min-h-screen" id="contact">
        <IndexContact /> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup>
const getPortofolio = async () => {
  try {
    return await $fetch("/api/portofolio");
  } catch (error) {
    throw createError(error)
  }
}
const {profile, projects, skills, educations, experiences, blogs}  = await $fetch("/api/portofolio");
//csr fetch diubah ke ssr
</script>
