# MAX Chat — GREEN-API

**Демо на Vercel:** ссылка будет добавлена после публикации.

Тестовое задание: отправка и получение текстовых сообщений MAX через GREEN-API.
React, TypeScript, Vite, Tailwind CSS, shadcn/ui, Axios, Zustand. Архитектура — FSD.

## Локальный запуск

Нужны Node.js 22.18+ (ветка 22) или 24+ и npm.

```sh
npm ci
```

Скопируйте `.env.example` в `.env` (PowerShell: `Copy-Item .env.example .env`,
Linux/macOS: `cp .env.example .env`).

```dotenv
VITE_API_URL=https://3100.api.green-api.com
```

Укажите адрес API своего инстанса. Переменная задаёт начальное значение поля
`apiUrl`; его также можно изменить в форме. После изменения `.env` перезапустите Vite.
`idInstance` и `apiTokenInstance` вводятся в приложении, в `.env` они не нужны.

```sh
npm run dev
```

Откройте адрес из терминала (обычно http://localhost:5173).

## Подключение MAX

1. Создайте инстанс MAX в [GREEN-API](https://console.green-api.com/), авторизуйте
   свой аккаунт по QR-коду и дождитесь состояния `authorized`.
2. В настройках инстанса включите `incomingWebhook`, оставьте `webhookUrl` пустым,
   сохраните и подождите около минуты.
3. В приложении введите `idInstance`, `apiTokenInstance` и `apiUrl` из кабинета.
4. Нажмите «+», введите номер получателя с кодом страны и откройте чат.
5. Отправьте текст и ответьте из MAX получателя — ответ появится в переписке.

[Подключение инстанса](https://green-api.com/v3/docs/before-start/) ·
[Настройка уведомлений](https://green-api.com/v3/docs/api/receiving/technology-http-api/)

Enter отправляет сообщение, Shift+Enter добавляет перенос. Поддерживается только
текст личных сообщений. История, черновики и учётные данные хранятся в памяти
и очищаются при выходе или перезагрузке. Пометка «В очереди» означает принятие
запроса GREEN-API; статусы доставки не отслеживаются.
Для проверки используйте одну вкладку, читающую очередь инстанса.

## Docker

Нужен запущенный Docker Engine / Docker Desktop с Linux-контейнерами.

```sh
docker build -t green-api-test .
docker run --rm -p 5173:5173 green-api-test
```

Откройте http://localhost:5173. Контейнер запускает Vite через `npm run dev`.
По умолчанию адрес API берётся из `.env.example`. Чтобы использовать свой `.env`:

```sh
docker run --rm --env-file .env -p 5173:5173 green-api-test
```

Локальный `.env` и токены в Docker-образ не копируются.

## Проверки и сборка

```sh
npm run check
npm run build
npm run preview
```

`check` запускает TypeScript, ESLint, Prettier, Jest-тесты хелперов и сборку.
Готовые файлы находятся в `dist`. Неизвестный адрес открывает страницу 404,
ошибка отображения — страницу с кнопкой повторной попытки.
