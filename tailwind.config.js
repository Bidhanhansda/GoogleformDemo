/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "form-background": "#F0EBF8",
        "form-top": "#673AB7",


      },
      fontFamily: {
        "Roboto": " 'Roboto', sans-serif",
      },
    },
  },
  plugins: [
    // require('flowbite/plugin')
    require('tailwind-scrollbar'),
  ],
}

