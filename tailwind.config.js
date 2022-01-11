module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "scotland-blue": "#005eb8",
      },
      fontFamily: {
        serif: ["Braveheart", "serif"],
        cursive: ["Permanent Marker", "cursive"],
      },
      screens: {
        sm: [{ min: "320px", max: "500px" }],
        av: [{ min: "501px", max: "767px" }],
        lg: [{ min: "768px", max: "1022px" }],
        xl: "1023px",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
