/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  // adding a background image 
  backgroundImage:{
    'hero-pattern': "url('./src/assets/background.png')",
  }

    },
    
  
  },
  plugins: [],
}