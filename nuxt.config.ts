import { appDescription } from './constants/index'

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
        // devtools excluded
        exclude: /@nuxt/,
      },
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: appDescription },
      ],
    },
  },

  devtools: { enabled: true },

  typescript: { shim: false },
})
