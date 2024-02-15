<template>
  <div
    class="w-screen h-screen max-w-screen overflow-x-hidden min-h-screen bg-gradient-to-br from-gray-500 from-10% to-transparent to-100% transition-all duration-300">
    <!-- mobile header -->
    <div class="lg:hidden h-[70px] relative border-b border-white/20 px-3">
      <div class="h-full flex justify-between items-center">
        <a href="" class="flex-none flex-gap-4 items-center">
          <img src="/logo.svg" class="h-8" alt="" srcset="">
        </a>
        <label for="my-drawer-2" class="btn btn-ghost btn-circle">
          <LucideAlignRight :size="20" class="cursor-pointer " />
        </label>
      </div>
    </div>

    <!--main header -->
    <div class="h-[70px] relative border-b items-center text-white border-white/30 px-3 sm:px-8 md:pt-0 mb-12">
      <div class=" h-full flex items-center gap-3">
        <!-- sisi kiri -->

        <a href="/admin" class="intro-x hidden lg:flex items-center gap-3">
          <img src="/logo.svg" alt="logo.svg" class="w-7 max-lg:hidden" srcset="">
          <div class="font-semibold text-2xl max-lg:hidden">Valent Stefanos</div>
        </a>
        <!-- sisi kanan -->
        <div
          class="grow flex overflow-hidden justify-between items-center text-sm breadcrumbs pl-4 lg:border-l border-white/30">
          <ul class="font-light">
            <li><a>Home</a></li>
            <li><a>Documents</a></li>
            <li>Add Document</li>
          </ul>
          <DefaultlayoutThemeToggle />
        </div>
        <!-- avatar -->
        <div class="dropdown dropdown-end">
          <div tabindex="0" class="btn btn-ghost w-10 h-10 min-h-10 btn-circle">
            <div class="w-11 avatar">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" class="rounded-full" />
            </div>
          </div>
          <div class="dropdown-content z-[1] rounded-md menu shadow bg-gradient-to-tl from-gray-500 from-10% to-slate-600 to-100% text-white w-52">
            <ul tabindex="0" class="p-2">
              <div class="border-b border-white/30 px-1.5 pb-3">
                <div class="font-semibold">Valent Stefanos</div>
                <div class="text-xs">Administrator</div>
              </div>
              <li><a>
                  <LucideUser :size="16" /> User
                </a>
              </li>
              <li><button @click="authStore.logout">
                  <LucideLogOut :size="16" /> Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- content -->
    <div class="w-full h-content px-3 lg:px-16 py-5">
      <div class="wrapper -z-0 relative "></div>
      <div class="drawer max-lg:drawer-end bg-base-200 lg:drawer-open 0 rounded-3xl">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          <!-- main content -->
          <div class="bg-base-100 h-full w-full rounded-2xl shadow-xl lg-rounded-3xl flex flex-col p-16">
            <div class="h-40">
              <slot />
            </div>
          </div>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
          <AdminLayoutNavigation />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  colorMode: 'system',
  middleware: ['auth']
});

onMounted(() => {
  console.log("mounted")
})
const authStore = useAuthStore()
</script>

<style>
.wrapper::before {
  content: "";
  width: 90%;
  -webkit-animation: 0.4s intro-wrapper-animation ease-in-out 0.33333s;
  animation: 0.4s intro-wrapper-animation ease-in-out 0.33333s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
  border-radius: 1.3rem;
  position: absolute;
  left: 0px;
  right: 0px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -1rem;
  height: 100px;
  background-color: rgb(255 255 255 / 0.2);
  z-index: 1;
}

.side-nav>ul>li>.side-menu.side-menu--active:before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: block;
  border-radius: 0.5rem;
  border-bottom-width: 3px;
  border-style: solid;
  border-color: rgb(0 0 0 / 0.1);
  background-color: rgb(255 255 255 / 0.08);
}

@keyframes intro-wrapper-animation {
  100% {
    @apply opacity-100;
    transform: translateX(0px);
  }
}
</style>