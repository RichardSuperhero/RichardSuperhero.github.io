/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212a32',
        secondary: '#3b4957',
        accent: '#c55e73',
        gradient: {
          start: '#a14d7c',
          end: '#d16b85',
        },
      },
      fontFamily: {
        sans: ['Quattrocento Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, var(--gradient-start), var(--gradient-end))',
      },
    },
  },
  plugins: [],
}
