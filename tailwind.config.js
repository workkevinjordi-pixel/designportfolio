/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-black': '#000000',
        'text-white': '#FFFFFF',
        'text-grey': '#B3B3B3',
        'border-subtle': 'rgba(255,255,255,0.08)',
        'gradient-teal': '#2A5A58',
        'gradient-lime': '#C0D100',
        'primary': '#2b6cee',
        'accent-teal': '#2dd4bf',
        'accent-lime': '#bef264',
        'neutral-surface': '#111111',
        'background-light': '#f6f6f8',
        'background-dark': '#000000',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif-display': ['"DM Serif Display"', 'serif'],
      },
      animation: {
        'float-slow': 'float 20s ease-in-out infinite',
        'float-medium': 'float 15s ease-in-out infinite reverse',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.02' },
          '25%': { transform: 'translate(2%, 4%) scale(1.02)', opacity: '0.04' },
          '50%': { transform: 'translate(4%, 0) scale(1.05)', opacity: '0.03' },
          '75%': { transform: 'translate(-2%, -4%) scale(1.02)', opacity: '0.04' },
        }
      }
    },
  },
  plugins: [],
}
