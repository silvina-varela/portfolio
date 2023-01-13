/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
          me: {
              words: ['Hi! :)', 'I\'m Silvina Varela'],
              delay: 1,
              repeat: -1
          },
          yo: {
            words: ['Hola! :)', 'Soy Silvina Varela'],
            delay: 1,
            repeat: -1
          }
      }
  })
  ],
  darkMode: 'class',
}