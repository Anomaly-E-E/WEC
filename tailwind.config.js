/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'sans': ['Syne', 'sans-serif'],
        'mono': ['"DM Mono"', 'monospace'],
      },
      colors: {
        'forest-black': 'rgb(var(--forest-black) / <alpha-value>)',
        'forest-dark': 'rgb(var(--forest-dark) / <alpha-value>)',
        'forest-mid': 'rgb(var(--forest-mid) / <alpha-value>)',
        'forest-canopy': 'rgb(var(--forest-canopy) / <alpha-value>)',
        'moss-dark': 'rgb(var(--moss-dark) / <alpha-value>)',
        'moss': 'rgb(var(--moss) / <alpha-value>)',
        'fern': 'rgb(var(--fern) / <alpha-value>)',
        'leaf': 'rgb(var(--leaf) / <alpha-value>)',
        'sunlight': 'rgb(var(--sunlight) / <alpha-value>)',
        'gold': 'rgb(var(--gold) / <alpha-value>)',
        'bark': 'rgb(var(--bark) / <alpha-value>)',
        'bark-light': 'rgb(var(--bark-light) / <alpha-value>)',
        'cream': 'rgb(var(--cream) / <alpha-value>)',
        'cream-dim': 'var(--cream-dim)',
        'fog': 'var(--fog)',
      },
    },
  },
  plugins: [],
}
