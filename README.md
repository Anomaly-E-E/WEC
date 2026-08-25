# WEC 2026 Website

Official website for the Western Engineering Competition 2026.

## Tech Stack

- **React** with **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **React Router** (routing)

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
