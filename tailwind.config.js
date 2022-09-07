/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./public/main.css"],
  theme: {
    fontFamily: {
      rambla: ["Rambla"],
    },
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fade: "fade 0.8s ease-in-out",
      },
    },
  },
  plugins: [require("autoprefixer")],
};
