import { defineConfig } from 'vitepress'

import UnoCSS from 'unocss/vite'
import unoConfig from './unocss.config.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dovecot community software repository",
  description: "Dovecot community repositories",

  lang: 'en-US',
  base: '/',
  cleanUrls: false,
  metaChunk: true,

  head: [
    [
      'script',
	{ async: '', src: '/local.js', integrity: "sha384-XmzROl2mXqula8PSmaR6xZZu4ikThcuIVgvS2X70Y5PEC8GKiUaknAqwoRqpHNDO" }
    ]
  ],
  vite: {
    optimizeDeps: {
      exclude: ['vitepress'],
    },
    server: {
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      UnoCSS(unoConfig),
    ],
  },
})
