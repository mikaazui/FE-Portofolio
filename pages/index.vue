import { LucideTwitter } from '#build/components'; import { IndexContact } from
'#build/components';
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
        <indexAbout :profile="profile"/>
      </div>
      <div class="min-h-screen" id="experience">
        <indexExperience :experiences="experiences"/>
      </div>
      <div class="min-h-screen" id="education">
        <indexEducation />
      </div>
      <div class="min-h-screen" id="skills">
        <indexSkills />
      </div>
      <div class="min-h-screen" id="project">
        <IndexProject />
      </div>
      <div class="min-h-screen" id="blog">
        <IndexBlog />
      </div>
      <div class="min-h-screen" id="contact">
        <IndexContact />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await $fetch(" http://localhost:5000/portofolio");
const profile = data.profile;
const projects = data.projects;
const skills = data.skills;
const educations = data.education;
const experiences = data.experiences;
const blog = data.blogs;

console.log("data profile");
console.log(profile);
console.log("data project");
console.log(projects);
console.log("data skills");
console.log(skills);
console.log("data educations");
console.log(educations);
console.log("data experiences");
console.log(experiences);
console.log("data blog");
console.log(blog);
</script>
