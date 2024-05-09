/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1604px',
      },
      fontFamily: {
        'dm': [ "DM Sans", "sans-seri"]
      
      },
      colors: {
        'primary': '#262626',
        'comon':"#F5F5F3"
      },
    },
  },
  plugins: [],
}