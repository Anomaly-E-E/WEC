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
        'forest-black': '#faf8f2',
        'forest-dark': '#eef1e5',
        'forest-mid': '#ffffff',
        'forest-canopy': '#e3ead6',
        'moss-dark': '#2f4a35',
        'moss': '#3d6b42',
        'fern': '#4a7a42',
        'leaf': '#3f7d38',
        'sunlight': '#4f8a2a',
        'gold': '#b8860a',
        'bark': '#3a2210',
        'bark-light': '#5c3d1e',
        'cream': '#1a2e1f',
        'cream-dim': 'rgba(26,46,31,0.62)',
        'fog': 'rgba(79,138,42,0.06)',
      },
    },
  },
  plugins: [],
}
