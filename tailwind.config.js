module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#004DB3",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif", "Euphoria Script"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "930px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};