<script setup lang="ts">
  import { useData, withBase } from 'vitepress'
  const newsPages = import.meta.glob('../../news/*.md', {
    eager: true,
  })
  const newsItems = Object.entries(newsPages).map(([path, mod]) => {
    const frontmatter = mod.__pageData.frontmatter
    const p = mod.__pageData.relativePath.replace('news/', '').replace('.md', '.html')
    return {
      path: p, // VitePress route
      date: frontmatter?.date,
      formattedDate: frontmatter?.date,
      title: frontmatter?.title ?? 'Untitled',
      link: frontmatter?.link ?? 'Missing',
    }
  }).sort((a, b) => {
    if (a.path < b.path) return 1
    else if (a.path > b.path) return -1
    else return 0
  })
</script>

<template>
  <div class="max-w-8xl mx-auto w-full space-y-6">
    <h2 class="text-4xl font-bold text-left my-6 uppercase">News</h2>
    <div class="flex-1">
    <vueper-slides
      :visible-slides="3"
      slide-multiple
      :slide-ratio="1 / 4" 
      fixed-height="100px"
      arrows
      bullets
      class="no-shadow"
      slide-content-class="!bg-green !text-white w-full"
    >
      <vueper-slide
        v-for="(item, i) in newsItems"
        :key="i"
        class="!bg-green !text-white"
      >
      <template #content>
        <div class="max-w-2xl mx-auto text-white bg-green">
          <a :href="item.link" class="hover:underline text-white bg-green text-xl">
            <h3 class="text-lg font-bold">{{ item.title }}</h3>
            <p class="text-sm">{{ item.date }}</p>
          </a>
        </div>
      </template>
      </vueper-slide>
    </vueper-slides>
    </Div>
  </div>
</template>
