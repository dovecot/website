import { defineConfig } from 'vitepress'

import UnoCSS from 'unocss/vite'
import unoConfig from './unocss.config.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dovecot | The Secure IMAP server",
  description: "Dovecot Pro is a full-service email platform that delivers dynamic scalability, high performance, efficient utilization of hardware, and outstanding support to the world's largest Telcos, ISP's, and Hosters.",
  lang: 'en-US',
  base: '/',
  cleanUrls: true,
  metaChunk: true,

  themeConfig: {
    nav: [
	{ 'text': 'Download', link: 'https://repo.dovecot.org/' },
	{ 'text': 'Documentation', link: 'https://doc.dovecot.org/' },
	{ 'text': 'Support', link: '/support' },
	{ 'text': 'Security', link: '/security' },
//	{ 'text': 'Clients', link: '/clients' },
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
})
