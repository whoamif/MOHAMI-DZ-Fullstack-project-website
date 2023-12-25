/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-bg-color': '#2F303A',
        
      },
        fontFamily: {
          quicksand: ['Quicksand', 'sans-serif'],
        },
      
    },
  },
  plugins: [],
};
