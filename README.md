# Алгоритмы и структуры данных: учебный ресурс

Статический сайт на [VitePress](https://vitepress.dev): лекции, практика и видео по темам. Контент пишется в Markdown.

## Запуск (в том числе на новом ноутбуке)

Нужно: [Node.js](https://nodejs.org) версии 18 или новее (LTS) и git.

```bash
git clone <ссылка-на-репозиторий> algo-lessons
cd algo-lessons
npm install
npm run dev        # сайт откроется на http://localhost:5173
```

Без git можно просто скопировать папку проекта **без `node_modules`** (флешка, архив, облако) и выполнить `npm install` и `npm run dev`.

## Структура

```
docs/
  index.md                    главная
  about.md                    о проекте
  lessons/
    index.md                  список уроков
    01-complexity/
      index.md                лекция
      practice.md             задачи
      videos.md               видео и ссылки
    ...
  .vitepress/
    config.mts                настройки сайта, меню
    topics.mts                список тем (из него строится меню)
    components/               <Video>, <Task>
```

## Как добавить урок

1. Добавить строку в [docs/.vitepress/topics.mts](docs/.vitepress/topics.mts).
2. Создать папку `docs/lessons/<slug>/` с файлами `index.md`, `practice.md`, `videos.md` (проще всего скопировать существующую).
3. Добавить пункт в `docs/lessons/index.md`.

## Компоненты в Markdown

```md
<Video url="https://www.youtube.com/watch?v=XXXXXXXXXXX" title="Название" />

<Task n="1" title="Название" level="easy">
Условие.
<template #hint>Подсказка</template>
<template #solution>Решение</template>
</Task>
```

Уровни: `easy`, `medium`, `hard`.

## Сборка и публикация

```bash
npm run build      # результат в docs/.vitepress/dist
npm run preview    # проверить собранную версию
```

Готовую папку `dist` можно выложить на любой статический хостинг. Для GitHub Pages укажите в `config.mts` `base: '/<имя-репозитория>/'`.
