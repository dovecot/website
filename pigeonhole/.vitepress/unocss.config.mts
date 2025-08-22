import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind4,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  safelist: [
	  'i-heroicons-clipboard-document-solid',
	  'i-heroicons-chevron-right-solid',
	  'i-heroicons-chevron-down-solid',
  ],
  presets: [
    presetAttributify(),
    presetWind4(),
    presetTypography(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
	provider: 'bunny',
	fonts: {
	  sans: 'OpenSans',
	  mono: 'Fira Code',
	},
    })
  ],
  rules: [
    ['max-w-8xl', { 'max-width': '140rem' }],
  ],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      green: '#54bbab',
      problue: 'rgb(75, 155, 215)',
    },
    fontFamily: {
      sans: [ 'OpenSans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      base: '16px',
    },
  },
});
