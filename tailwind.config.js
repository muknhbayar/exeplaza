/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js",

  ],
  theme: {
       
    
    fontFamily: {      
      sans: ['Inter', 'sans'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
   
  },
  plugins: [
    "tw-elements/dist/plugin",
  ],
}