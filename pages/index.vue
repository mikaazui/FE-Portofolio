<template>
  <div class="min-h-screen flex">
    <!-- MAIN CONTENT -->
    <div class="min-h-screen grow grid grid-cols-10">
      <!-- PROFILE CARD -->
      <div class="col-span-10 md:col-span-3">
        <div class="md:fixed">content FIXED medium</div>
      </div>
      <!-- SECTIONS -->
      <div class="col-span-10 md:col-span-7">
        <div class="min-h-screen"></div>
        <div class="min-h-screen"></div>
        <div class="min-h-screen"></div>
        <div class="min-h-screen"></div>
      </div>
    </div>
    <!-- SIDEMENU -->
    <div class="min-h-screen w-28 flex-none max-md:hidden">
      <div class="fixed min-h-screen flex items-center">
        <div
          class="border-2 border-neutral-600 p-5 rounded-full flex flex-col gap-5"
        >
          <div class="tooltip tooltip-left" data-tip="Home">
            <LucideHome :size="18" class="text-accent" />
          </div>
          <div class="tooltip tooltip-left" data-tip="About">
            <LucideUserRound :size="18" class="text-accent" />
          </div>
          <div class="tooltip tooltip-left" data-tip="Resume">
            <LucideBriefcase :size="18" class="text-accent" />
          </div>
          <div class="tooltip tooltip-left" data-tip="Service">
            <LucideLibraryBig :size="18" class="text-accent" />
          </div>
          <div class="tooltip tooltip-left" data-tip="Skills">
            <LucideBlocks :size="18" class="text-accent" />
          </div>
          <div class="tooltip tooltip-left" data-tip="Potofolio">
            <LucideNotebook-tabs :size="18" class="text-accent" />
          </div>
          <div class="tooltip tooltip-left" data-tip="Testimonials">
            <LucideMessageSquareText :size="18" class="text-accent" />
          </div>
          <div class="tooltip tooltip-left" data-tip="Contact">
            <LucideContact :size="18" class="text-accent" />
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
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />

    <div class="drawer-side overflow-x-hidden">
      <label
        for="my-drawer-4"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>
