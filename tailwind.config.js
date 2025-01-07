/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx,txs}'],
  theme: {
    extend: {
      colors:{
        primary:'#3B82F6',
        secondary: '#A855F7'
      }
    },
  },
  plugins: [],
}

