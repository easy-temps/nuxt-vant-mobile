import presetRemToPx from '@unocss/preset-rem-to-px'
import presetWind3 from '@unocss/preset-wind3'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// https://unocss.dev/guide/config-file
export default defineConfig({
  shortcuts: [
    // shortcuts to multiple utilities
    ['btn', 'px-6 py-3 rounded-3 inline-block bg-primary text-white cursor-pointer hover:bg-primary-hover disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
  ],

  presets: [
    presetWind3(),
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
