import { LucideTwitter } from '#build/components'; import { IndexContact } from
'#build/components';
<template>
  <!-- MAIN CONTENT -->
  <div class="min-h-screen grow grid grid-cols-10">
    <!-- PROFILE CARD -->
    <div class="col-span-10 md:col-span-5 lg:col-span-4 xl:col-span-3 w-full">
      <IndexProfileCard />
    </div>
    <!-- SECTIONS -->
    <div class="col-span-10 md:col-span-5 lg:col-span-6 xl:col-span-7">
      <div class="min-h-screen" id="about">
        <indexAbout />
      </div>
      <div class="min-h-screen" id="resume">
        <indexResume />
      </div>
      <div class="min-h-screen" id="skills">
        <indexSkills />
      </div>
      <div class="min-h-screen" id="project">
        <IndexProject />
      </div>
      <div class="min-h-screen" id="testimonials">
        <IndexTestimonials />
      </div>
      <div class="min-h-screen" id="contact">
        <IndexContact />
      </div>
    </div>
  </div>
</template>
