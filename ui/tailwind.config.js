const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/@flanksource/flanksource-ui/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "warm-gray": colors.warmGray,
        teal: colors.teal,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled", "checked"],
      textColor: ["disabled"],
      margin: ["first", "last"],
      padding: ["first", "last"],
      borderWidth: ["first", "hover", "last"],
      borderRadius: ["first", "last"],
      borderColor: ["hover", "checked"],
    },
  }, // eslint-disable-next-line global-require
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
