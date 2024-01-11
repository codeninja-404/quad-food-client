const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Baloo: ["Baloo Bhaijaan 2", "san-serif"],
      Mon: "Montserrat",
    },
    extend: {},
  },
  plugins: [],
});
