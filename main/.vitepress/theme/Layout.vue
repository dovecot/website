<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import Home from './Home.vue'
import Support from './Support.vue'

type NavItem = NavItemWithLink | NavItemWithChildren

interface NavItemWithLink {
  text: string
  link: string
  activeMatch?: string
  target?: string
  rel?: string
  noIcon?: boolean
}

interface NavItemChildren {
  text?: string
  items: NavItemWithLink[]
}

interface NavItemWithChildren {
  text?: string
  items: (NavItemChildren | NavItemWithLink)[]
  activeMatch?: string
}

const { site, theme, frontmatter } = useData()

const nav = (theme.value.nav as NavItem[]) || []

</script>

<template>
  <div class="min-h-screen flex flex-col bg-white m-x-32">
    <!-- Wrapper for consistent layout -->
    <div class="max-w-8xl mx-auto w-full px-4">
      <!-- Navbar -->
      <header class="w-full border-b border-gray-400">
        <nav class="flex items-center justify-between py-3">
          <!-- Left: Logo -->
          <div class="flex items-center gap-2">
 	    <a :href="withBase('/index')"><img src="/dovecot_logo.png" alt="Dovecot" class="h-32 w-auto" /></a>
          </div>

          <!-- Right: Nav Links -->
          <div class="flex items-center gap-6">
            <a
              v-for="item in nav"
              :key="item.link"
	      :href="item.link.startsWith('http') ? item.link : withBase(item.link)"
              class="text-gray-700 hover:underline text-lg"
            >
              {{ item.text }}
            </a>
          </div>
        </nav>
      </header>

      <!-- Main content -->
      <main class="w-full px-4 py-10">
        <Home v-if="frontmatter.home"/>
	<Support v-else-if="frontmatter.support"/>
	<article v-else class="prose max-w-full text-lg">
          <Content/>
	</article>
      </main>
    </div>

   <footer class="max-w-full w-full py-4 text-center text-sm text-gray-500 bg-white">
	   &copy; Dovecot - See <a class="underline" href="https://github.com/dovecot/frontpage/">https://github.com/dovecot/frontpage/</a>
  </footer>
  </div>
</template>
