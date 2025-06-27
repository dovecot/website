import { defineConfig } from 'vitepress'

import UnoCSS from 'unocss/vite'
import unoConfig from './unocss.config.mts'
import { addSriToDist } from './plugins/sri-post'

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
	{ async: '', src: '/local.js' }
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
  async buildEnd(ctx) {
    console.log("[vitepress-sri] post-processing outDir=", ctx.outDir);
    await addSriToDist(ctx.outDir);
  },
})
