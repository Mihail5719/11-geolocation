# 📍 Geolocation Promise

Веб-приложение, которое получает координаты пользователя через
Geolocation API, обёрнутый в Promise: никаких колбэков — только
цепочки `.then() / .catch() / .finally()`.

## 🎯 Назначение проекта

Домашнее задание по теме «Event Loop»: преобразование колбэк-based
API `navigator.geolocation.getCurrentPosition` в промис
и корректная обработка всех кодов ошибок.

## ✨ Основные возможности

- 🛰 **Promise-обёртка** `getPosition()` над Geolocation API
- 🗺 **Вывод координат**: широта, долгота, точность + ссылка на карту
- 🌀 **Спиннер** на время определения позиции, скрытие через `.finally()`
- 🛡 **Обработка ошибок**: все три кода (`PERMISSION_DENIED`,
  `POSITION_UNAVAILABLE`, `TIMEOUT`) через единый `.catch()`

## 🛠 Технологии

- **HTML5 / CSS3** — разметка и стили состояний
- **JavaScript (ES6+)** — `new Promise`, `resolve/reject`, цепочки
- **Geolocation API** — браузерный API определения местоположения

## 📂 Структура проекта

```text
├── index.html    # Кнопка, спиннер, блоки результата и ошибки
├── style.css     # Стили карточки и состояний
├── app.js        # getPosition() + UI-логика
└── README.md     # Описание проекта