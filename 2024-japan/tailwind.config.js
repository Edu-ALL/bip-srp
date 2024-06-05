/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "../asset/img/background.png",
      },
      colors: {
        primary: "#0000FF",
      },
    },
  },
  plugins: [],
  prefix: "tw-",
};
