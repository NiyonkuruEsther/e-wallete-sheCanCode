/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greenPrimary: "#7DDF9D",
        bluePrimary: "#17B7BD",
        lighGray: "#DDDDDD"
      }
    }
  },
  plugins: []
};
