<script setup lang="ts">
// Использование:
// <Task n="1" title="Название" level="easy">
//   Условие (markdown)
//   <template #hint>Подсказка</template>
//   <template #solution>Решение</template>
// </Task>
defineProps<{ n?: string | number; title?: string; level?: 'easy' | 'medium' | 'hard' }>()
const labels = { easy: 'лёгкая', medium: 'средняя', hard: 'сложная' }
</script>

<template>
  <section class="task">
    <header>
      <strong>Задача {{ n }}<template v-if="title">. {{ title }}</template></strong>
      <span v-if="level" :class="['badge', level]">{{ labels[level] }}</span>
    </header>
    <div class="body"><slot /></div>
    <details v-if="$slots.hint"><summary>Подсказка</summary><slot name="hint" /></details>
    <details v-if="$slots.solution"><summary>Решение</summary><slot name="solution" /></details>
  </section>
</template>

<style scoped>
.task { border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 14px 18px; margin: 18px 0; background: var(--vp-c-bg-soft); }
header { display: flex; gap: 10px; align-items: center; margin-bottom: 8px; }
.badge { font-size: 0.75em; padding: 1px 8px; border-radius: 10px; color: #fff; }
.easy { background: #2e9d5b; } .medium { background: #d08a1c; } .hard { background: #c9423f; }
details { margin-top: 8px; }
summary { cursor: pointer; color: var(--vp-c-brand-1); }
</style>
