<template>
  <div class="min-h-screen flex">
    <!-- MAIN CONTENT -->
    <div class="bg-slate-600 min-h-screen grow grid grid-cols-10">
      <!-- PROFILE CARD -->
      <div class="col-span-10 md:col-span-3 bg-orange-400">
        <div class="md:fixed">content FIXED medium</div>
      </div>
      <!-- SECTIONS -->
      <div class="col-span-10 md:col-span-7 bg-orange-500">
        <div class="min-h-screen bg-orange-600"></div>
        <div class="min-h-screen bg-orange-700"></div>
        <div class="min-h-screen bg-orange-800"></div>
        <div class="min-h-screen bg-orange-900"></div>
      </div>
    </div>
    <!-- SIDEMENU -->
    <div class="bg-slate-900 min-h-screen w-28 flex-none max-md:hidden">
      <div class="fixed min-h-screen flex items-center">
        <div
          class="border-2 border-neutral-600 p-4 rounded-full flex flex-col gap-2"
        >
          <div class="tooltip tooltip-left" data-tip="Home">
            <LucideHome :size="22" class="text-accent" />
          </div>
          <div class="tooltip tooltip-left" data-tip="About">
            <LucideUserRound :size="22" class="text-accent" />
          </div>
          <div class="tooltip tooltip-left" data-tip="Resume">
            <LucideBriefcase :size="22" class="text-accent" />
          </div>
          <div class="tooltip tooltip-left" data-tip="Service">
            <LucideLibraryBig :size="22" class="text-accent" />
          </div>
          <div class="tooltip tooltip-left" data-tip="Skills">
            <LucideBlocks :size="22" class="text-accent" />
          </div>
          <div class="tooltip tooltip-left" data-tip="Potofolio">
            <LucideNotebook-tabs :size="22" class="text-accent" />
          </div>
          <div class="tooltip tooltip-left" data-tip="Testimonials">
            <LucideMessageSquareText :size="22" class="text-accent" />
          </div>
          <div class="tooltip tooltip-left" data-tip="Contact">
            <LucideContact :size="22" class="text-accent" />
          </div>
        </div>
      </div>
      <div class="drawer-content fixed">
        <!-- Page content here -->
        <label for="my-drawer-4" class="btn btn-circle btn-outline mt-8">
          <lucideMenu :size="22" />
        </label>
      </div>
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
