/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        themeColor: '#ef3038', // custom theme color 
      },
    },
  },
  plugins: [],
}

