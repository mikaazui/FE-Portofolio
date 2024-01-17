<template>
  <div class="min-h-screen flex text-accent">
    <!-- MAIN CONTENT -->
    <!-- PROFILE CARD -->
    <slot />
    <!-- SIDEMENU -->
    <div class="min-h-screen w-28 flex-none max-md:hidden">
      <div class="fixed min-h-screen flex items-center">
        <div
          class="border-2 border-neutral-600 p-5 rounded-full flex flex-col gap-5"
        >
          <NuxtLink
            :to="{ path: '/', hash: '#about' }"
            class="tooltip tooltip-left"
            data-tip="About"
          >
            <LucideUserRound :size="18" class="text-secondary" />
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#resume' }"
            class="tooltip tooltip-left"
            data-tip="Resume"
          >
            <LucideBriefcase :size="18" class="text-secondary" />
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#skills' }"
            class="tooltip tooltip-left"
            data-tip="Skills"
          >
            <LucideBlocks :size="18" class="text-secondary" />
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#project' }"
            class="tooltip tooltip-left"
            data-tip="Project"
          >
            <LucideNotebook-tabs :size="18" class="text-secondary" />
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#testimonials' }"
            class="tooltip tooltip-left"
            data-tip="Testimonials"
          >
            <LucideMessageSquareText :size="18" class="text-secondary" />
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#contact' }"
            class="tooltip tooltip-left"
            data-tip="Contact"
          >
            <LucideContact :size="18" class="text-secondary" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- sidebar toggle -->
    <div class="md:hidden drawer-content fixed right-0 mt-8 mr-8">
      <label for="my-drawer-4" class="btn btn-circle btn-outline">
        <lucideMenu :size="18" />
      </label>
    </div>
  </div>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />

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
            <NuxtLink
              :to="{ path: '/', hash: '#about' }"
              class="flex items-center gap-3"
            >
              <LucideUserRound :size="18" class="text-secondary" />
              <div>About</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ path: '/', hash: '#resume' }"
              class="flex items-center gap-3"
            >
              <LucideBriefcase :size="18" class="text-secondary" />
              <div>Resume</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ path: '/', hash: '#skills' }"
              class="flex items-center gap-3"
            >
              <LucideBlocks :size="18" class="text-secondary" />
              <div>Skills</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ path: '/', hash: '#project' }"
              class="flex items-center gap-3"
            >
              <LucideNotebook-tabs :size="18" class="text-secondary" />
              <div>Project</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ path: '/', hash: '#testiomonials' }"
              class="flex items-center gap-3"
            >
              <LucideMessageSquareText :size="18" class="text-secondary" />
              <div>Testimonials</div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ path: '/', hash: '#contact' }"
              class="flex items-center gap-3"
            >
              <LucideContact :size="18" class="text-secondary" />
              <div>Contact</div>
            </NuxtLink>
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
