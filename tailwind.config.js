/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,jsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});

