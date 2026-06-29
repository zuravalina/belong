# BELONG — by Virea

Односторінковий цифровий продукт екосистеми Virea. Статичний сайт, готовий до деплою на Vercel.

## Структура проєкту

```
belong-vercel/
├── index.html              — основна сторінка (повний SEO, OG, Twitter Cards)
├── styles.css               — стилі
├── script.js                 — скрипти (scroll-reveal, центрування wordmark)
├── favicon.ico                — фавікон (multi-size)
├── apple-touch-icon.png       — іконка для iOS
├── vercel.json                — конфігурація кешування для Vercel
├── images/
│   ├── hero-candle.jpg        — фон hero-секції
│   ├── final-crowd.jpg        — фон фінальної секції
│   ├── og-image.jpg           — Open Graph / Twitter Card зображення (1200×630)
│   ├── favicon-16.png
│   ├── favicon-32.png
│   └── favicon-512.png
└── README.md
```

## Деплой на Vercel

### Варіант 1 — через GitHub (рекомендовано)
1. Створіть новий репозиторій на GitHub.
2. Розпакуйте цей ZIP і завантажте всі файли в репозиторій (git push або через веб-інтерфейс GitHub "Upload files").
3. Зайдіть на [vercel.com](https://vercel.com) → **Add New Project** → виберіть цей репозиторій.
4. Framework Preset: **Other** (це статичний сайт, build команда не потрібна).
5. Натисніть **Deploy**.

### Варіант 2 — через Vercel CLI
```bash
npm i -g vercel
cd belong-vercel
vercel --prod
```

## ⚠️ Перед публікацією — обов'язково замініть домен

У файлі `index.html` зараз стоїть тимчасовий домен-заглушка `https://belong.virea.com/` у тегах:
- `<link rel="canonical">`
- `og:url`, `og:image`
- `twitter:image`

Після того як Vercel видасть вам реальний URL (або ви підключите власний домен), замініть `https://belong.virea.com` на ваш справжній домен в усіх цих місцях — інакше прев'ю в Telegram/WhatsApp/Facebook/LinkedIn будуть посилатись на зображення за неробочою адресою.

## Перевірка прев'ю для соцмереж

Після деплою перевірте, як виглядає прев'ю:
- Facebook/WhatsApp: https://developers.facebook.com/tools/debug/
- Twitter/X: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/
- Telegram: достатньо надіслати лінк собі в чат — прев'ю генерується автоматично з тегів og:*

## Примітка щодо шрифтів і зображень

- Шрифти (Tenor Sans, Nunito Sans, Arimo, Petit Formal Script) підключені через Google Fonts CDN — інтернет-з'єднання потрібне для коректного відображення.
- OG-зображення та favicon згенеровані програмно в фірмовій палітрі (фіолетовий `#38253b` + бежевий `#fdf8f2`) зі знаком ∞. Якщо є готовий брендований варіант від дизайнера — просто замініть файли `images/og-image.jpg` та `favicon.ico` / `apple-touch-icon.png`, зберігши ті самі імена та розміри (OG: 1200×630, apple-touch-icon: 180×180).
