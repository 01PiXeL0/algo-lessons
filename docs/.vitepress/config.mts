import { defineConfig } from 'vitepress'
import { topics } from './topics.mts'

// base берётся из переменной BASE (её задаёт GitHub Actions), локально это '/'
export default defineConfig({
  lang: 'ru-RU',
  title: 'Алгоритмы и структуры данных',
  description: 'Учебный ресурс: лекции, практика, видео',
  base: process.env.BASE || '/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Уроки', link: '/lessons/' },
      { text: 'О проекте', link: '/about' }
    ],
    sidebar: {
      '/lessons/': [
        { text: 'Все уроки', link: '/lessons/' },
        ...topics.map(t => ({
          text: t.title,
          collapsed: true,
          items: [
            { text: 'Лекция', link: `/lessons/${t.slug}/` },
            { text: 'Практика', link: `/lessons/${t.slug}/practice` },
            { text: 'Видео и ссылки', link: `/lessons/${t.slug}/videos` }
          ]
        }))
      ]
    },
    search: { provider: 'local' },
    outline: { label: 'На этой странице' },
    docFooter: { prev: 'Назад', next: 'Дальше' },
    darkModeSwitchLabel: 'Тема',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх'
  }
})
