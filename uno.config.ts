import { createRemToPxProcessor } from '@unocss/preset-wind4/utils'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

/**
 * The base font size to convert rem to px (1rem = n px).
 */
const BASE_FONT_SIZE = 4

export default defineConfig({
  shortcuts: [
    ['btn', 'px-6 py-3 rounded-3 inline-block bg-primary text-white cursor-pointer hover:bg-primary-hover disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
  ],

  presets: [
    presetWind4({
      /**
       * Converts rem to px for all utilities
       */
      preflights: {
        theme: {
          process: createRemToPxProcessor(BASE_FONT_SIZE),
        },
      },
    }),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      themeKey: 'font',
    }),
  ],

  postprocess: [
    createRemToPxProcessor(BASE_FONT_SIZE),
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
