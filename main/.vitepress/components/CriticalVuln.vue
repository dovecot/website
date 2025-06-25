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
    const elem_a = a.path.split('.')[0].split('-')
    const elem_b = b.path.split('.')[0].split('-')
    var i = 0

    while(i < elem_a.length)
    {
          var ea = elem_a[i]
      var eb = elem_b[i]
          if (elem_a[i] != 'CVE') {
         ea = parseInt(ea)
         eb = parseInt(eb)
      }
      if (ea < eb) return 1
      else if (ea > eb) return -1
      i = i + 1
    }

    return 0
  })
</script>

<template>
 <div class="justify-center">
   <ul class="gap-2" v-for="(item) in cveItems">
    <li class="gap-4 flex-container flex">
      <div class="text-left flex-col w-48"><span class="text-green font-bold text-xl"><i class="mx-4 i-heroicons-exclamation-circle-solid"></i>{{ item.date }}</span></div>
        <div class="flex-col"><span class="text-xl"><a :href="item.link" class="hover:underline">{{ item.title }}: {{ item.excerpt }}</a></span></div>
    </li>
  </ul>
</div>
</template>
