# WEC 2026 Website

Official website for the Western Engineering Competition 2026.

## Tech Stack

- **React** with **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **React Router** (routing)

## Getting Started

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable components (Nav, Footer, IntroOverlay, TeamSection, etc.)
├── pages/            # Page components (Home, About, Competitions, Sponsors, Winners, etc.)
├── data/             # Data files (competitions, team, winners, bonus marks)
├── styles/           # Global CSS and design system
└── App.tsx           # Main app with routing
```

## Features

- ✅ Dramatic leaf burst intro animation (plays once per session)
- ✅ Dark forest theme with premium aesthetics
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations and page transitions
- ✅ 10 competition categories with expandable details
- ✅ Team section with executive structure
- ✅ Registration coming-soon page
- ✅ Bonus marks course listing
- ✅ Multi-level navigation with dropdown

## TODO Items

### Sponsors Page
- [ ] Add confirmed sponsor logos

### Winners Pages
- [ ] Add 2025-2026 results after competition

## Design System

### Colors
All colors are defined as CSS variables in `src/styles/globals.css`:
- Forest blacks: `--forest-black`, `--forest-dark`, `--forest-mid`
- Greens: `--moss`, `--fern`, `--leaf`, `--sunlight`
- Accents: `--gold`, `--bark`, `--cream`

### Typography
- **Display/Headlines**: Playfair Display (serif, weight 700-900)
- **Body/UI**: Syne (sans-serif, weight 400-800)
- **Mono/Labels**: DM Mono (monospace, for course codes and tags)

## Notes

- Intro animation uses `sessionStorage` - clears when browser tab closes
- All external links use `target="_blank"` with `rel="noopener noreferrer"`
- Grain texture overlay adds atmospheric depth
- Navigation becomes glass-morphism on scroll
