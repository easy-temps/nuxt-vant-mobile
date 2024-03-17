export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vant/nuxt',
    'nuxt-module-eslint-config',
  ],

  typescript: {
    shim: false,
  },

  postcss: {
    plugins: {
      // https://github.com/wswmsword/postcss-mobile-forever
      'autoprefixer': {},
      'postcss-mobile-forever': {
        appSelector: '#app',
        viewportWidth: 375,
        maxDisplayWidth: 600,
        exclude: /node_modules/,
      },
    },
  },
})
