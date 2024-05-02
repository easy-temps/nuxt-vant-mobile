import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import presetRemToPx from '@unocss/preset-rem-to-px'

// https://unocss.dev/guide/config-file
export default defineConfig({
  shortcuts: [
    // shortcuts to multiple utilities
    ['btn', 'px-6 py-3 rounded-3 inline-block bg-primary text-white cursor-pointer hover:bg-primary-hover disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
  ],

  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts(),
    presetRemToPx({
      baseFontSize: 4,
    }),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],

  theme: {
    colors: {
      primary: {
        DEFAULT: 'var(--c-primary)',
        hover: 'var(--c-primary-active)',
      },
    },
  },
})
