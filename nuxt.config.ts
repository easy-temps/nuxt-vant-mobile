export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vant/nuxt',
    'nuxt-module-eslint-config',
  ],

  typescript: {
    shim: false,
  },

})
