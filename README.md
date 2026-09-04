# Ketan Damle — Portfolio

A sample portfolio built during **Session 02: Portfolio Making (T8481)** as a
reference for students. Stack matches what we teach in class:

- **Vite** — build tool / dev server
- **React 19** — framework
- **Tailwind CSS v4** — styling
- **React Router** — client-side routing
- **three.js + @react-three/fiber + drei** — hero blob
- **framer-motion** — reveal animations
- **Vercel** — hosting

## Run it locally

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

## Structure

```
src/
├── components/
│   ├── three/HeroBlob.jsx   → three.js distorted sphere
│   ├── Header.jsx           → pill nav + "available for work" chip
│   ├── Hero.jsx             → landing hero with blob background
│   ├── FeaturedWork.jsx     → 3 case-study preview cards
│   ├── Marquee.jsx          → capability strip
│   ├── About.jsx            → home about block
│   └── Footer.jsx           → email CTA + social + oversized wordmark
├── pages/
│   ├── Home.jsx
│   ├── Work.jsx             → /work index
│   ├── CaseStudy.jsx        → /work/:slug detail
│   ├── About.jsx            → /about
│   ├── Contact.jsx          → /contact
│   └── NotFound.jsx
├── data/
│   └── projects.js          → single source of truth for case studies
└── index.css                → palette + tokens + fonts
```

## Deploy

Every push to this branch auto-deploys to Vercel.
