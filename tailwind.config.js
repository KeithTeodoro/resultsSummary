/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Roboto"', "sans-serif"],
      },
      colors: {
        violet: "#5f44f2",
        blue: "#3b32ed",
        circleColor: "#5128d1",
        buttonColor: "#303b5a",
      },
    },
  },
  plugins: [],
};
