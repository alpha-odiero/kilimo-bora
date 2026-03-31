# Kilimo Bora Website

Marketing and product catalog site for Kilimo Bora’s Kenyan produce and export services. Built with React, Vite, Tailwind (via vanilla CSS utilities), and motion animations.

## Quick start

```bash
npm install
npm run dev   # starts Vite on port 3000
npm run build # production bundle to dist/
```

If PowerShell blocks scripts, run `Set-ExecutionPolicy -Scope Process Bypass` in the same shell before `npm run dev`.

## Tech stack
- React 19 + TypeScript
- Vite 6
- motion for animations
- lucide-react icons

## Project layout
- `src/` React source
  - `components/Navigation.tsx` navbar/footer
  - `components/Home.tsx` landing page
  - `components/Pages.tsx` About, Products, Export, Blog, FAQ, Order, Tracking, Contact
  - `constants.ts` product/blog/FAQ data
  - `index.css` global styles and utility classes
- `public/assets/images/` local image library (all imagery is served from here)

## Branding
- Brand name: **Kilimo Bora**
- Logo: `public/assets/images/kilimo-logo.png` (shown in navbar/footer)
- Footer texture: `public/assets/images/maize.jpg` at ~30% opacity behind the footer

## Data & assets
- Products and blog cards read from `src/constants.ts`. Images referenced there must exist in `public/assets/images/`.
- New assets: drop into `public/assets/images/` and point to them with `/assets/images/<file>` in `constants.ts`.

## Environment
No API keys required for the static site. If you later add APIs, create `.env.local` (not committed) and read variables via `import.meta.env`.
