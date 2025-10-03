/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        darkpurplecustom: '#45046A', 
        lightp: '#5C2A9D',           
        bgcard: '#F1EBBB',          
        magentapink: '#B5076B'    
      },
    },
  },
  plugins: [
    require("flowbite/plugin") 
  ],
  safelist: [
    'bg-darkpurplecustom',
    'bg-lightp',
    'bg-bgcard',
    'bg-magentapink',
    'text-magentapink'
  ],
};
