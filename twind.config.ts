/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      screens: {
        mobile: "360px",
        tablet: "600px",
        small: "900px",
        medium: "1200px",
        large: "1800px",
      },
      colors: {
        primary: "#2FD180",
        "primary-dark": "#000000",
        "primary-light": "#C5FFE9",
        transparent: "transparent",
        "primary-red": "#B92C38",
      },
      fontFamily: {
        sans: ["Albert Sans", "sans-serif"],
        serif: ["serif"],
      },
    },
  },
};
