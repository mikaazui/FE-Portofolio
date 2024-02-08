<template>
  <div class="w-screen h-screen max-w-screen min-h-screen bg-base-100" data-theme="light">
    <!-- mobile header -->
    <div class="lg:hidden h-[70px] relative border-b border-white/20 px-3">
      <div class="h-full flex justify-between items-center">
        <a href="" class="flex-none flex-gap-4 items-center">
          <img src="/logo.svg" class="h-8" alt="" srcset="">
        </a>
        <LucideAlignRight :size="18" class="cursor-pointer" />
      </div>
    </div>

    <!--main header -->
    <div class="h-[70px] relative border-b items-center bg-base-200 border-white/30 px-3 sm:px-8 md:pt-0 mb-12">
      <div class=" h-full flex items-center gap-3">
        <!-- sisi kiri -->
        <a href="" class="intro-x hidden md:flex items-center gap-3">
          <img src="/logo.svg" alt="logo.svg" class="w-7" srcset="">
          <div class="font-semibold">Valent Stefanos</div>
        </a>
        <!-- sisi kanan -->
        <div class="grow flex justify-between text-sm breadcrumbs pl-4 border-l border-white/30">
          <ul class="font-light">
            <li><a>Home</a></li>
            <li><a>Documents</a></li>
            <li>Add Document</li>
          </ul>
        </div>
        <!-- avatar -->
        <div class="dropdown dropdown-end">
          <div tabindex="0" class="btn btn-ghost w-10 h-10 min-h-10 btn-circle">
            <div class="w-11 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" class="rounded-full" />
            </div>
          </div>
          <div class="dropdown-content z-[1] rounded-md menu shadow bg-base-200 w-52">
            <ul tabindex="0" class="p-2">
              <div class="border-b border-white/30 p-1.5">
                <div class="font-semibold">Valent Stefanos</div>
                <div class="text-xs">Administrator</div>
              </div>
              <li><a>
                  <LucideUser :size="16" /> User
                </a></li>
              <li><a>
                  <LucideLogOut :size="16" /> Log Out
                </a></li>
            </ul>

          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
});

</script>

<style></style>