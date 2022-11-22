const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
      opacity: {
        '60': '0.60'
      },
      colors: {
        'black': '#000000',
        'blue': '#0085AE',
        'grey': '#cfd8dc',
      }
    },
  },
  plugins: [ 
    require('@tailwindcss/forms')
  ]}
)
