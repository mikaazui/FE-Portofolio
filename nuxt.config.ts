// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-lucide-icons', '@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@vueuse/nuxt'],
  colorMode: {
    preference: 'light', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
  },
  runtimeConfig: {
    apiUri: "http://localhost:5000", // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiUri: "http://localhost:5000", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
});