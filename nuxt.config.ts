// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-lucide-icons"],
  runtimeConfig: {
    apiUri: "http://localhost:5000", // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiUri: "http://localhost:5000", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
});
