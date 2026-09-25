# MAX Chat — GREEN-API

Тестовое задание: интерфейс отправки и получения текстовых сообщений MAX
на React + TypeScript.

**Текущий этап:** инициализация. Работает статический стартовый экран
со светлой и тёмной темами MAX. Подключение аккаунта, создание чатов и обмен сообщениями
будут реализованы следующими этапами.

## Локальный запуск

Требуется Node.js 22.18+ в ветке 22 либо Node.js 24+ и npm.

```sh
npm ci
npm run dev
```

Откройте адрес из терминала (обычно http://localhost:5173).
На этапе инициализации учетные данные и файл `.env` не нужны.

## Команды

| Команда                | Назначение                                  |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Локальный сервер Vite                       |
| `npm run build`        | Проверка типов и production-сборка в `dist` |
| `npm run preview`      | Локальный просмотр production-сборки        |
| `npm run typecheck`    | Проверка TypeScript                         |
| `npm run lint`         | ESLint без предупреждений                   |
| `npm run lint:fix`     | Автоисправления ESLint                      |
| `npm run format`       | Форматирование Prettier                     |
| `npm run format:check` | Проверка форматирования                     |
| `npm run check`        | Типы, ESLint, Prettier и сборка             |

## Технологии и структура

Проект создан командой `npm create vite@latest . -- --template react-ts --no-interactive`.
React, TypeScript, Vite, Axios. Стили — Tailwind CSS через
[официальный Vite-плагин](https://tailwindcss.com/docs/installation/using-vite).
ESLint и Prettier настроены отдельно. Используется один `tsconfig.json`.

```text
src/
  app/                  # Сборка приложения и глобальные стили
  pages/ChatPage/        # Страница чата
  widgets/chat-sidebar/ # Боковая панель чатов
  shared/configs/       # Настройки Axios
  main.tsx              # Точка входа
```

Архитектура — FSD по мотивам
[frontend-nutrition](https://github.com/AndreyTorkhov/frontend-nutrition).
В `features/theme-toggle` находится переключение темы. Слой `entities` появится
вместе с моделями чатов и сообщений.

Компонент находится в `index.tsx` внутри своей папки, без вложенной `ui`
и файлов реэкспорта. Типы (`interfaces.ts`), состояние (`store.ts`) и хуки
добавляются рядом по мере необходимости.

## Компоненты интерфейса

[shadcn/ui](https://ui.shadcn.com/docs/installation/vite) настроен через
`components.json`: стиль `default`, база `zinc`, CSS-переменные и иконки Lucide,
как в референсе. Светлая и тёмная палитры MAX заданы в `src/app/styles/index.css`.
По умолчанию используется светлая тема. Кнопка рядом с заголовком «Чаты»
переключает тему; выбор сохраняется в localStorage. Провайдер и хук находятся
в `shared/configs/theme`, по подходу из референса.

В `shared/ui` добавлены Button, Input, Textarea, Label, Card, Dialog, Avatar,
ScrollArea, Separator, Skeleton, Alert и Tooltip. Компоненты редактируем локально.
Для объединения Tailwind-классов используем `cn` из `shared/lib/utils.ts`.

Новый компонент можно загрузить командой `npx shadcn@latest add <имя>`.
После генерации переносим `<имя>.tsx` в `<имя>/index.tsx`, а собственные интерфейсы
и варианты выносим в соседние файлы. Существующие компоненты не перезаписываем
без проверки локальных изменений.

## Проверка первого этапа

1. Запустить `npm run check`.
2. Запустить `npm run dev`.
3. Проверить светлый экран с панелью «Чаты» и пустым состоянием переписки.
   Переключить тему кнопкой рядом с заголовком и перезагрузить страницу:
   выбранная тема должна сохраниться. Проверить кнопку с клавиатуры (Tab, Enter).
4. Сузить окно до 375 px: панели должны расположиться друг под другом без
   горизонтального скролла.
5. Проверить отсутствие ошибок в консоли браузера.

Кнопки подключения и обмен сообщениями на этом этапе отсутствуют.

## Vercel

После публикации репозитория импортировать его в Vercel:

- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm ci`

Учетные данные GREEN-API будут вводиться пользователем в интерфейсе.
Не добавляйте токен в репозиторий или переменные `VITE_*`.

## Документация API

- [GREEN-API для MAX](https://green-api.com/max)
- [SendMessage](https://green-api.com/v3/docs/api/sending/SendMessage/)
- [Получение через HTTP API](https://green-api.com/v3/docs/api/receiving/technology-http-api/)
