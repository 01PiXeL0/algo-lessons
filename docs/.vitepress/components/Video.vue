<script setup lang="ts">
// Использование: <Video url="https://www.youtube.com/watch?v=..." title="Название" />
import { computed } from 'vue'
const props = defineProps<{ url: string; title?: string }>()

const embed = computed(() => {
  const m = props.url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/)
  return m ? `https://www.youtube.com/embed/${m[1]}` : null
})
</script>

<template>
  <figure class="video">
    <div v-if="embed" class="frame">
      <iframe :src="embed" :title="title || 'Видео'" allowfullscreen loading="lazy" />
    </div>
    <a v-else :href="url" target="_blank" rel="noopener">▶ {{ title || url }}</a>
    <figcaption v-if="title">{{ title }}</figcaption>
  </figure>
</template>

<style scoped>
.video { margin: 16px 0; }
.frame { position: relative; padding-top: 56.25%; }
.frame iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; border-radius: 8px; }
figcaption { font-size: 0.85em; color: var(--vp-c-text-2); margin-top: 6px; }
</style>
