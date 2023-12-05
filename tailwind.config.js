/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-gray': '#e2e8f0'
      },
      boxShadow: {
        'box-shadow': 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'
      },
      height: {
        'height': 'calc(100vh - 64px)'
      }
    },
  },
  plugins: [],
};
