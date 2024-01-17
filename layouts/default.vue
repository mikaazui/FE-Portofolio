<template>
 <div class="min-h-screen flex text-accent">
  <!-- MAIN CONTENT -->
  <div class="min-h-screen grow grid grid-cols-10">
    <!-- PROFILE CARD -->
    <slot />
  </div>
  <!-- SIDEMENU -->
  <div class="min-h-screen w-28 flex-none max-md:hidden">
    <div class="fixed min-h-screen flex items-center">
      <div
        class="border-2 border-neutral-600 p-5 rounded-full flex flex-col gap-5"
      >
        <div class="tooltip tooltip-left" data-tip="Home">
          <LucideHome :size="18" class="text-secondary" />
        </div>
        <div class="tooltip tooltip-left" data-tip="About">
          <LucideUserRound :size="18" class="text-secondary" />
        </div>
        <div class="tooltip tooltip-left" data-tip="Resume">
          <LucideBriefcase :size="18" class="text-secondary" />
        </div>
        <div class="tooltip tooltip-left" data-tip="Service">
          <LucideLibraryBig :size="18" class="text-secondary" />
        </div>
        <div class="tooltip tooltip-left" data-tip="Skills">
          <LucideBlocks :size="18" class="text-secondary" />
        </div>
        <div class="tooltip tooltip-left" data-tip="Portofolio">
          <LucideNotebook-tabs :size="18" class="text-secondary" />
        </div>
        <div class="tooltip tooltip-left" data-tip="Testimonials">
          <LucideMessageSquareText :size="18" class="text-secondary" />
        </div>
        <div class="tooltip tooltip-left" data-tip="Contact">
          <LucideContact :size="18" class="text-secondary" />
        </div>
      </div>
    </div>
  </div>
  <!-- sidebar toggle -->
  <div class="md:hidden drawer-content fixed right-0 mt-8">
    <label for="my-drawer-4" class="btn btn-circle btn-outline">
      <lucideMenu :size="18" />
    </label>
  </div>
</div>
<div class="drawer drawer-end">
  <input
    id="my-drawer-4"
    type="checkbox"
    class="drawer-toggle"
  />

  <div class="drawer-side overflow-x-hidden text-accent">
    <label
      for="my-drawer-4"
      aria-label="close sidebar"
      class="drawer-overlay"
    ></label>
    <div class="p-14 w-80 min-h-full bg-base-200">
      <div class="text-2xl mb-4 text-white">Menu</div>
      <ul class="flex-col flex gap-4">
        <!-- Sidebar content here -->
        <li>
          <a class="flex items-center gap-3">
            <LucideHome :size="18" class="text-secondary" />
            <div>Home</div>
          </a>
        </li>
        <li>
          <a class="flex items-center gap-3">
            <LucideUserRound :size="18" class="text-secondary" />
            <div>About</div>
          </a>
        </li>
        <li>
          <a class="flex items-center gap-3">
            <LucideBriefcase :size="18" class="text-secondary" />
            <div>Resume</div>
          </a>
        </li>
        <li>
          <a class="flex items-center gap-3">
            <LucideLibraryBig :size="18" class="text-secondary" />
            <div>Service</div>
          </a>
        </li>
        <li>
          <a class="flex items-center gap-3">
            <LucideBlocks :size="18" class="text-secondary" />
            <div>Skills</div>
          </a>
        </li>
        <li>
          <a class="flex items-center gap-3">
            <LucideNotebook-tabs :size="18" class="text-secondary" />
            <div>Portofolio</div>
          </a>
        </li>
        <li>
          <a class="flex items-center gap-3">
            <LucideMessageSquareText :size="18" class="text-secondary" />
            <div>Testimonials</div>
          </a>
        </li>
        <li>
          <a class="flex items-center gap-3">
            <LucideContact :size="18" class="text-secondary" />
            <div>Contact</div>
          </a>
        </li>
      </ul>

      <!-- social -->
      <div>
        <div class="text-2xl my-4 text-white">social</div>
        <div class="flex gap-4">
          <lucideInstagram :size="18" class="text-secondary" />
          <lucideGithub :size="18" class="text-secondary" />
          <lucideTwitter :size="18" class="text-secondary" />
        </div>
      </div>
    </div>
  </div>
</div>

</template>
