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
        'forest-black': '#060d07',
        'forest-dark': '#080f09',
        'forest-mid': '#0f1c10',
        'forest-canopy': '#152817',
        'moss-dark': '#243d26',
        'moss': '#3d6b42',
        'fern': '#5a8c52',
        'leaf': '#7ab870',
        'sunlight': '#c8e87a',
        'gold': '#d4a832',
        'bark': '#3a2210',
        'bark-light': '#5c3d1e',
        'cream': '#f0ead6',
        'cream-dim': 'rgba(240,234,214,0.6)',
        'fog': 'rgba(200,232,122,0.06)',
      },
    },
  },
  plugins: [],
}
