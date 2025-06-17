// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import 'virtual:uno.css'
import 'vueperslides/dist/vueperslides.css'
import './style.css'
import { VueperSlides, VueperSlide } from 'vueperslides'
import CriticalVuln from '../components/CriticalVuln.vue'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('vueper-slides', VueperSlides)
    app.component('vueper-slide', VueperSlide)
    app.component('CriticalVuln', CriticalVuln)
  }

} satisfies Theme

