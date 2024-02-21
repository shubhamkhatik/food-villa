/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.number-input::-webkit-inner-spin-button, .number-input::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0,
        },
        '.number-input': {
          '-moz-appearance': 'textfield',
          background: 'linear-gradient(90deg, rgba(215,219,116,1) 0%, rgba(195,215,219,0.5522584033613445) 100%)',
        },
       
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

