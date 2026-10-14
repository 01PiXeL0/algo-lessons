import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Video from '../components/Video.vue'
import Task from '../components/Task.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Video', Video)
    app.component('Task', Task)
  }
} satisfies Theme
