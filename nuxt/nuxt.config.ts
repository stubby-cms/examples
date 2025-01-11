// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  ssr: true,
  routeRules: {
    "/blog": { isr: true },
    "/blog/:slug": { isr: true },
  },
  modules: ['@nuxtjs/mdc'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});