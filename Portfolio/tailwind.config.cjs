/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#090a0f",
        secondary: "#a1a1aa",
        tertiary: "#12151f",
        "black-100": "#0e1017",
        "black-200": "#07080c",
        "white-100": "#f4f4f5",
      },
      boxShadow: {
        card: "0px 25px 80px -15px rgba(0, 0, 0, 0.7)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.14) 0%, rgba(9, 10, 15, 1) 70%)",
      },
    },
  },
  plugins: [],
};
