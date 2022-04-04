module.exports = {
  content: [
    "../index.html",
    "../page/addCity.html",
    "./style/index.css",
    "../js/index.js",
  ],
  theme: {
    extend: {
      colors: {
        transparent__gray: "rgba(38, 46, 62, 0.39)",
        grea:"#39da8a"
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
