/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#0d1b2a',
        lightbg: '#f8f9fa',
      },
      boxShadow: {
        insetCard: 'inset 0 0 5rem rgba(0,0,0,0.5)'
      },
      keyframes: {
        'logo-cloud': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 4rem))' },
        },
      },
      animation: {
        'logo-cloud': 'logo-cloud 30s linear infinite',
      },
    },
  },
  plugins: [],
}
