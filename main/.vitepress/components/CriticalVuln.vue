<script setup lang="ts">
  import { useData, withBase } from 'vitepress'
  const cvePages = import.meta.glob('../../cve/*.md', {
    eager: true,
  })
  const cveItems = Object.entries(cvePages).map(([path, mod]) => {
    const frontmatter = mod.__pageData.frontmatter
    const p = mod.__pageData.relativePath.replace('cve/', '').replace('.md', '.html')
    return {
      path: p, // VitePress route
      date: frontmatter?.date,
      title: frontmatter?.title ?? 'Untitled',
      excerpt: frontmatter?.excerpt ?? 'Missing',
      link: frontmatter?.link ?? 'Missing',
    }
  }).sort((a, b) => {
    if (a.path < b.path) return 1
    else if (a.path > b.path) return -1
    else return 0
  })
</script>

<template>
<div class="text-center max-w-4xl">
  <ul class="list-none">
	  <li v-for="(item) in cveItems"><span class="text-green font-bold text-xl"><i class="i-heroicons-exclamation-circle-solid"></i>{{ item.date }}</span><span class="m-x-4"><a :href="item.link" class="hover:underline">{{ item.excerpt }}</a></span></li>
  </ul>
</div>
</template>
