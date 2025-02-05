/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // Usually not needed in Tailwind 4, but you can specify specific directories if necessary

    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
            darkBlue: "#0C0C31",
            green: "#A5C882",
            white: "#FEFCFC",
            button: "#080821",

      }
    },
  },

  plugins: [],
};
