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
              repeat: -1
          },
          yo: {
            words: ['Hola! :)', 'Soy Silvina Varela'],
            repeat: -1
          }
      }
  })
  ],
  darkMode: 'class',
}
