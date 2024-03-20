export default defineNuxtConfig({
  modules: [
    '@vant/nuxt',
    '@unocss/nuxt',
    'nuxt-module-eslint-config',
  ],

  css: [
    '@unocss/reset/tailwind.css',
  ],

  postcss: {
    plugins: {
      'autoprefixer': {},

      // https://github.com/wswmsword/postcss-mobile-forever
      'postcss-mobile-forever': {
        appSelector: '#__nuxt',
        viewportWidth: 375,
        maxDisplayWidth: 600,
        // exclude: /node_modules/,
      },
    },
  },

  devtools: { enabled: true },

  typescript: { shim: false },
})
