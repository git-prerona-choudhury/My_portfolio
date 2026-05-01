/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#39ff14',
          mint: '#7cffc4',
          dark: '#07100b',
        },
      },
      boxShadow: {
        glow: '0 0 28px rgba(57, 255, 20, 0.35)',
        'glow-soft': '0 0 18px rgba(124, 255, 196, 0.18)',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        grid:
          'linear-gradient(rgba(57,255,20,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
