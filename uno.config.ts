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
    ['btn', 'px-6 py-3 rounded-3 border-none inline-block bg-green-400 text-white cursor-pointer hover:bg-green-600 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
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
})
