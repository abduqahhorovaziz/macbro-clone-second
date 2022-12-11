/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      boxShadow:{
        'button-shadow': ['0 0 1px 1px #06c']
      }
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
