module.exports = {
  mode: "jit",
  purge: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_pages/**/*.html",
    "./*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        title: "Source Code Pro",
        body: "Poppins",
      },
      colors: {
        yellow: {
          "900-1/2": "hsla(22, 78%, 26%, 0.5)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
