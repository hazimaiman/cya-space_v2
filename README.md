CyA Space — Next.js (App Router) + Tailwind Migration

Overview
- This folder contains a Next.js 14 App Router port of your React app, styled with Tailwind CSS while maintaining the original design and behavior.
- Day (light) mode is the default. Toggle switches the `dark` class on `<html>`.

Project Structure
- app/layout.jsx: Root layout (server) loading Tailwind and wrapping with ThemeProvider.
- app/page.jsx: Home page combining Nav, Hero, Company, and Footer.
- app/globals.css: Tailwind layers and global styles (textures and animations).
- components/ThemeProvider.jsx: Client theme manager with localStorage persistence.
- components/Nav.jsx: Client nav with anchor scrolling and theme toggle.
- components/Hero.jsx: Client hero with typewriter effect and CTA.
- components/Company.jsx: Client marquee using Framer Motion.
- components/Footer.jsx: Footer with icons and links.
- public/: Put images here (see public/README_ASSETS.txt).

Getting Started
1) Install deps
   npm install
2) Run dev server
   npm run dev
3) Open http://localhost:3000

Assets
- Copy the files from your original `src/assets/` into `next-app/public/` using the names listed in `public/README_ASSETS.txt`.

Notes
- Smooth in-page scrolling uses CSS `scroll-behavior: smooth`.
- Background textures match the original via external URLs in CSS.
- Tailwind dark mode uses the `class` strategy; the toggle flips the `dark` class on `<html>`.

