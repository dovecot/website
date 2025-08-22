import { defineConfig } from 'vitepress'

import UnoCSS from 'unocss/vite'
import unoConfig from './unocss.config.mts'
import { addSriToDist } from './plugins/sri-post'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pigeonhole |  Sieve Support for Dovecot",
  description: "Pigeonhole is the name of the project that adds support for the Sieve language (RFC 5228) and the ManageSieve protocol (RFC 5804) to the Dovecot Secure IMAP Server.",
  lang: 'en-US',
  base: '/',
  cleanUrls: true,
  metaChunk: true,

  themeConfig: {
    nav: [
      { 'text': 'Download', link: 'download.html' },
      { 'text': 'Documentation', link: 'https://doc.dovecot.org/' },
      { 'text': 'Dovecot', link: 'https://dovecot.org/' },
    ],
  },

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
