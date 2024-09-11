/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          200: '#F1F8E8',
          300: '#D8EFD3',
          400: '#95D2B3',
          500: '#55AD9B',
        },
        fontFamily: {
          'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
}
