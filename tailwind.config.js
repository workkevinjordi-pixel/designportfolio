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
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif-display': ['"DM Serif Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
