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
        'forest-black': '#fbfaf5',
        'forest-dark': '#e6f0dc',
        'forest-mid': '#ffffff',
        'forest-canopy': '#dcead0',
        'moss-dark': '#1f3d28',
        'moss': '#2d5c3a',
        'fern': '#3d7a45',
        'leaf': '#2f9142',
        'sunlight': '#4caf1f',
        'gold': '#c9971a',
        'bark': '#3a2210',
        'bark-light': '#5c3d1e',
        'cream': '#12241a',
        'cream-dim': 'rgba(18,36,26,0.68)',
        'fog': 'rgba(76,175,31,0.06)',
      },
    },
  },
  plugins: [],
}
